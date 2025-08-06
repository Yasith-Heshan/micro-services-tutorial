# Makefile for MongoDB + Mongo Express

# Configuration
MONGO_CONTAINER = mongodb
MONGO_EXPRESS_CONTAINER = mongo-express
MONGO_IMAGE = mongo
MONGO_EXPRESS_IMAGE = mongo-express
MONGO_PORT = 27017
MONGO_EXPRESS_PORT = 8081
MONGO_USERNAME = mongoadmin
MONGO_PASSWORD = secret

.PHONY: build run run-express stop stop-express rm rm-express logs logs-express clean

build:
	docker pull $(MONGO_IMAGE)
	docker pull $(MONGO_EXPRESS_IMAGE)

run:
	docker run -d \
		--name $(MONGO_CONTAINER) \
		-e MONGO_INITDB_ROOT_USERNAME=$(MONGO_USERNAME) \
		-e MONGO_INITDB_ROOT_PASSWORD=$(MONGO_PASSWORD) \
		-p $(MONGO_PORT):27017 \
		-v mongodb_data:/data/db \
		$(MONGO_IMAGE)

run-express:
	docker run -d \
		--name $(MONGO_EXPRESS_CONTAINER) \
		--link $(MONGO_CONTAINER):mongo \
		-e ME_CONFIG_MONGODB_ADMINUSERNAME=$(MONGO_USERNAME) \
		-e ME_CONFIG_MONGODB_ADMINPASSWORD=$(MONGO_PASSWORD) \
		-e ME_CONFIG_MONGODB_SERVER=mongo \
		-p $(MONGO_EXPRESS_PORT):8081 \
		$(MONGO_EXPRESS_IMAGE)

stop:
	docker stop $(MONGO_CONTAINER) && docker stop $(MONGO_EXPRESS_CONTAINER)

stop-express:
	docker stop $(MONGO_EXPRESS_CONTAINER)

rm:
	docker rm $(MONGO_CONTAINER)

rm-express:
	docker rm $(MONGO_EXPRESS_CONTAINER)

logs:
	docker logs -f $(MONGO_CONTAINER)

logs-express:
	docker logs -f $(MONGO_EXPRESS_CONTAINER)

clean: stop stop-express rm rm-express
