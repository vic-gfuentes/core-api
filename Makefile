# Start local development environment
start-local-dev:
	docker compose up -d

# Stop local development environment
stop-local-dev:
	docker compose down

# Rebuild local Docker image and start
rebuild-local:
	docker compose down --rmi all
	docker compose up --build -d
