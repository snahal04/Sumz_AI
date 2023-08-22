#!/bin/bash

# Build Docker image
docker build -t sumzai .

# Run Docker container
docker run -d --rm -p 5173:5173 sumzai
