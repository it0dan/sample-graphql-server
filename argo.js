try {
    var target = $call.request.getHeader("dest");
    $console.debug("target", target);
  
    var body = JSON.parse($call.request.getBody().getString("utf-8"));
    $console.debug("body", body);
  
    if (target != null && body['client'] != null) {
  
      $call.setDestinationUri(new Packages.java.net.URI(target));
      $call.request.setHeader('Host', $call.destinationUri.getHost());
      $call.request.getBody().setString(JSON.stringify(body), "utf-8");
  
    }
  } catch (e) {
    $call.tracer.trace("Exception message => " + e.message + " <= in line => " + e.stack);
    $console.debug(">sensedia => Exception", e);
    throw e;
  }