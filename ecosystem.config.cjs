module.exports = {
    apps: [{
        name: "sam95link",
        script: "./app.js",
        env: {
            NODE_ENV: "development",
        },
        env_production: {
            NODE_ENV: "production",
        },
        log_date_format: 'YYYY-MM-DD HH:mm Z',
        combine_logs: true
    }]
}