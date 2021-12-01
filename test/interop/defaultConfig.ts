export default {
  "endpoints": {
    "shared-bcs-main-1": {
      "connectionString": "provider=http;host=https://bsc-dataseed.binance.org/",
      "slots": 2,
      "requestLimits": {
        "count": 10000,
        "intervalInSeconds": 300
      }
    },
    "shared-bcs-main-2": {
      "connectionString": "provider=http;host=https://bsc-dataseed1.defibit.io/",
      "slots": 2,
      "requestLimits": {
        "count": 10000,
        "intervalInSeconds": 300
      }
    },
    "shared-bcs-main-3": {
      "connectionString": "provider=http;host=https://bsc-dataseed1.ninicoin.io/",
      "slots": 2,
      "requestLimits": {
        "count": 10000,
        "intervalInSeconds": 300
      }
    },
    "shared-bcs-main-4": {
      "connectionString": "provider=http;host=https://bsc-dataseed2.defibit.io/",
      "slots": 2,
      "requestLimits": {
        "count": 10000,
        "intervalInSeconds": 300
      }
    },
    "shared-bcs-main-5": {
      "connectionString": "provider=http;host=https://bsc-dataseed3.defibit.io/",
      "slots": 2,
      "requestLimits": {
        "count": 10000,
        "intervalInSeconds": 300
      }
    },
    "shared-bcs-main-6": {
      "connectionString": "provider=http;host=https://bsc-dataseed4.defibit.io/",
      "slots": 2,
      "requestLimits": {
        "count": 10000,
        "intervalInSeconds": 300
      }
    },
    "shared-bcs-main-7": {
      "connectionString": "provider=http;host=https://bsc-dataseed2.ninicoin.io/",
      "slots": 2,
      "requestLimits": {
        "count": 10000,
        "intervalInSeconds": 300
      }
    },
    "shared-bcs-main-8": {
      "connectionString": "provider=http;host=https://bsc-dataseed3.ninicoin.io/",
      "slots": 2,
      "requestLimits": {
        "count": 10000,
        "intervalInSeconds": 300
      }
    },
    "shared-bcs-main-9": {
      "connectionString": "provider=http;host=https://bsc-dataseed4.ninicoin.io/",
      "slots": 2,
      "requestLimits": {
        "count": 10000,
        "intervalInSeconds": 300
      }
    },
    "shared-bcs-main-10": {
      "connectionString": "provider=http;host=https://bsc-dataseed1.binance.org/",
      "slots": 2,
      "requestLimits": {
        "count": 10000,
        "intervalInSeconds": 300
      }
    },
    "shared-bcs-main-11": {
      "connectionString": "provider=http;host=https://bsc-dataseed2.binance.org/",
      "slots": 2,
      "requestLimits": {
        "count": 10000,
        "intervalInSeconds": 300
      }
    },
    "shared-bcs-main-12": {
      "connectionString": "provider=http;host=https://bsc-dataseed3.binance.org/",
      "slots": 2,
      "requestLimits": {
        "count": 10000,
        "intervalInSeconds": 300
      }
    },
    "shared-bcs-main-13": {
      "connectionString": "provider=http;host=https://bsc-dataseed4.binance.org/",
      "slots": 2,
      "requestLimits": {
        "count": 10000,
        "intervalInSeconds": 300
      }
    },
    "shared-wss": {
      "connectionString": "provider=ws;host=wss://bsc-ws-node.nariox.org:443",
      "slots": 1,
      "streaming": true,
      "requestLimits": {
        "count": 1,
        "intervalInSeconds": 1,
      }
    }
  }
};