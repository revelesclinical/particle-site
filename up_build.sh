#!/bin/bash

# Environment validation
if [ -z "$BUILD_TAG" ]; then
    export BUILD_TAG=$(date '+%Y%m%d-%H%M%S')
fi

# Build for each architecture
for ARCH in "amd64" "arm64"; do
    echo "Building for ${ARCH}..."
    docker buildx build \
        --platform linux/${ARCH} \
        -t clinical-engagement:${ARCH}-${BUILD_TAG} \
        --push .
done

# Create and push multi-arch manifest with timestamp
docker manifest create clinical-engagement:${BUILD_TAG} \
    clinical-engagement:amd64-${BUILD_TAG} \
    clinical-engagement:arm64-${BUILD_TAG}

docker manifest push clinical-engagement:${BUILD_TAG}

# Maintain latest tag for backward compatibility
docker manifest create clinical-engagement:latest \
    clinical-engagement:amd64-${BUILD_TAG} \
    clinical-engagement:arm64-${BUILD_TAG}

docker manifest push clinical-engagement:latest

# Start the application using docker-compose
docker-compose up -d