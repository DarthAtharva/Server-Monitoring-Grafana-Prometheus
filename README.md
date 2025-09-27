# Server Monitoring with Grafana & Prometheus

A simple Node.js application demonstrating server monitoring using Prometheus metrics collection paired with Grafana visualisation. 
This project showcases how to implement real-time monitoring for web applications with custom metrics endpoints.

## Features

- **Express.js Server**: RESTful API with health checks and performance endpoints
- **Prometheus Integration**: Real-time metrics collection using `prom-client`
- **Docker Containerization**: Easy deployment with Docker Compose
- **Custom Metrics**: Application-specific performance monitoring
- **Heavy Task Simulation**: Realistic performance testing with variable response times
- **Error Handling**: Comprehensive error simulation and monitoring

## Prerequisites

- Node.js (v14 or higher)
- Docker and Docker Compose
- npm or yarn package manager

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DarthAtharva/Server-Monitoring-Grafana-Prometheus.git
   cd Server-Monitoring-Grafana-Prometheus
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the application**
   ```bash
   # Development mode with auto-reload
   npm run dev
   
   # Production mode
   npm start
   ```

## Docker Setup

1. **Start Prometheus with Docker Compose**
   ```bash
   docker-compose up -d
   ```

2. **Access Services**

| Service | URL | Description |
|---------|-----|-------------|
| Application | http://localhost:8000 | Main Node.js application |
| Prometheus | http://localhost:9090 | Prometheus metrics dashboard |

## API Endpoints

| Endpoint | Method | Description | Response |
|----------|--------|-------------|----------|
| `/` | GET | Health check endpoint | Simple status message |
| `/slow` | GET | Performance testing endpoint | Simulates heavy tasks with variable response times |
| `/metrics` | GET | Prometheus metrics collection | Formatted metrics data for monitoring |

### Detailed Endpoint Information

#### Health Check
```http
GET /
```
Returns a simple health check message confirming the server is running.

#### Performance Testing
```http
GET /slow
```
Simulates heavy computational tasks with the following characteristics:
- Variable response times (10ms to 3000ms)
- 25% chance of random error generation
- Realistic error scenarios (database issues, payment failures, etc.)

#### Metrics Collection
```http
GET /metrics
```
Provides Prometheus-formatted metrics for monitoring collection, including system and application metrics.

## Configuration

### Prometheus Configuration

| Setting | Value | Description |
|---------|-------|-------------|
| Scrape Interval | 4 seconds | Frequency of metrics collection |
| Target | 192.168.56.1:8000 | Application endpoint for scraping |
| Job Name | prometheus | Identifier for the monitoring job |

### Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| PORT | 8000 | Server port number |
| NODE_ENV | development | Application environment |

Create a `.env` file for custom configuration:
```env
PORT=8000
NODE_ENV=development
```

## Project Structure

```
Server-Monitoring-Grafana-Prometheus/
├── tasks/
│   └── heavyTask.js          # Performance simulation utilities
├── .gitignore                # Git ignore rules
├── docker-compose.yml        # Docker services configuration
├── index.js                  # Main application server
├── package.json              # Project dependencies and scripts
├── prometheus-config.yml     # Prometheus scraping configuration
└── README.md                 # Project documentation
```

## Dependencies

### Production Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| express | ^5.1.0 | Web framework for Node.js |
| prom-client | ^15.1.3 | Prometheus metrics client |

### Development Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| nodemon | ^3.1.10 | Development server with auto-reload |

## Key Components

### Heavy Task Simulation

The `heavyTask.js` module creates realistic performance scenarios:

| Feature | Description |
|---------|-------------|
| Variable Response Times | Random delays between 10ms and 3000ms |
| Error Simulation | 25% chance of various error types |
| Error Types | Database timeouts, payment failures, unauthorized access |
| Realistic Scenarios | Mimics real-world application behavior |

### Metrics Collection

| Metric Type | Description |
|-------------|-------------|
| System Metrics | CPU usage, memory consumption, process statistics |
| HTTP Metrics | Request duration, response codes, throughput |
| Custom Metrics | Application-specific performance indicators |
| Default Metrics | Node.js runtime metrics collected automatically |

## Monitoring Capabilities

| Capability | Description |
|------------|-------------|
| Real-time Performance | Track response times and error rates |
| Resource Usage | Monitor CPU and memory consumption |
| Error Tracking | Comprehensive error type and frequency analysis |
| Historical Data | Time-series data for trend analysis |
| Custom Dashboards | Prometheus query interface for data exploration |

## Usage Examples

### Testing Performance Endpoint
```bash
# Test the slow endpoint multiple times
for i in {1..10}; do
  curl http://localhost:8000/slow
  echo ""
done
```

### Viewing Metrics
```bash
# Get current metrics
curl http://localhost:8000/metrics
```

### Common Prometheus Queries

| Query | Purpose |
|-------|---------|
| `http_request_duration_ms` | HTTP request duration tracking |
| `process_cpu_user_seconds_total` | Process CPU usage monitoring |
| `nodejs_heap_size_used_bytes` | Node.js memory usage |
| `up` | Service availability status |

Access Prometheus UI at `http://localhost:9090` to execute these queries.

## Docker Services

| Service | Image | Port Mapping | Volume Mapping |
|---------|-------|--------------|----------------|
| prom-server | prom/prometheus | 9090:9090 | ./prometheus-config.yml:/etc/prometheus/prometheus.yml |

## Scripts Available

| Script | Command | Description |
|--------|---------|-------------|
| start | `npm start` | Start the application in production mode |
| dev | `npm run dev` | Start the application in development mode with auto-reload |

## Error Simulation Types

| Error Type | Description | Probability |
|------------|-------------|-------------|
| DB Server is down | Database connectivity issues | Random |
| DB Server is busy | Database performance problems | Random |
| Payment Failure | Payment processing errors | Random |
| Unauthorized Access | Authentication/authorization failures | Random |
| Bad Request | Invalid request handling | Random |

## Author

**Atharva Bhawalkar**
- GitHub: [@DarthAtharva](https://github.com/DarthAtharva)


**Star this repository if you find it helpful!**