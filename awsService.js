const awsIot = require("aws-iot-device-sdk");

const device  =  awsIot.device({
  keyPath: './awsCerts/c004006e8f79033885ec4d92b252b93c7180bf928d2ada1969841072310d2872-private.pem.key',
  certPath: './awsCerts/c004006e8f79033885ec4d92b252b93c7180bf928d2ada1969841072310d2872-certificate.pem.crt',
  caPath: './awsCerts/AmazonRootCA1.pem',
  host: 'a2ph2hb65hlnor-ats.iot.us-east-1.amazonaws.com',
  clientId: 'SemaforoIot',
  region: 'us-east-1',
});



module.exports = { device };
