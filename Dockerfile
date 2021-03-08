FROM ruby:3.0 AS builder

# Install nodejs on the default ruby 3 image
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
      apt-get install -y nodejs build-essential

CMD ["/bin/bash"]

FROM builder AS development

WORKDIR /app
COPY . .

RUN bundle install
RUN npm install

CMD ["bin/rails", "console"]
