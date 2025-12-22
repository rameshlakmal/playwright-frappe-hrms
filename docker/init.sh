#!/bin/bash

# Path inside container
FRAPPE_BENCH=/home/frappe/frappe-bench

# Check if bench already exists
if [ -d "$FRAPPE_BENCH/apps/frappe" ]; then
    echo "Bench exists, skipping setup"
    cd $FRAPPE_BENCH
else
    echo "Creating new bench"
    bench init --skip-redis-config-generation frappe-bench
    cd $FRAPPE_BENCH

    # Use containers instead of localhost
    bench set-mariadb-host mariadb
    bench set-redis-cache-host redis://redis:6379
    bench set-redis-queue-host redis://redis:6379
    bench set-redis-socketio-host redis://redis:6379

    # Remove redis/watch from Procfile
    sed -i '/redis/d' ./Procfile
    sed -i '/watch/d' ./Procfile

    # Get apps
    bench get-app erpnext
    bench get-app hrms

    # Create site
    bench new-site hrms.localhost \
        --force \
        --mariadb-root-password 123 \
        --admin-password admin \
        --no-mariadb-socket

    # Install HRMS app
    bench --site hrms.localhost install-app hrms
    bench --site hrms.localhost set-config developer_mode 1
    bench --site hrms.localhost enable-scheduler
    bench --site hrms.localhost clear-cache
    bench use hrms.localhost
fi

# Start Frappe in foreground (important!)
exec bench start
