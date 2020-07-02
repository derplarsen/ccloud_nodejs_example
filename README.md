# Confluent Cloud Node.js Example
Simple Node.js example using KafkaJS NPM

# Use the example js file provided

```npm install KafkaJS```

```node ccloud-consume.js```

# Security 

The basic method is to create an API Key and Secret via ccloud CLI or via Confluent Cloud UI. However, that will give you full privileges.

Most likely you want to create a service account and give limited privileges. Here is an example creating a service account with read only privs to a topic:

```ccloud api-key create --service-account 85746 --resource lkc-w596j```

```kafka acl create --allow --service-account 85746  --topic 'asdf' --operation READ```

```ccloud kafka acl create --allow --service-account 85746   --operation READ --consumer-group 'example-consumer'```

# Produce a message via CLI

ccloud kafka topic produce asdf
