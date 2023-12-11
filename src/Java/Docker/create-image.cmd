docker build --no-cache -f SQL\Dockerfile.PostgreSql -t dokumentooborot3-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t dokumentooborot3-java/app ../../..
