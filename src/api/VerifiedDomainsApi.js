/*
 * Mailchimp Marketing API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 3.0.58
 * Contact: apihelp@mailchimp.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.12
 *
 * Do not edit the class manually.
 *
 */



var ApiClient = require('../ApiClient');

/**
 * VerifiedDomains service.
 * @module api/VerifiedDomainsApi
 */

/**
 * Constructs a new VerifiedDomainsApi. 
 * @alias module:api/VerifiedDomainsApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
module.exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;

  /**
   * Add domain to account
   * Add a domain to the account.
   * @param {module:model/VerifiedDomains2} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/VerifiedDomains} and HTTP response
   */
  this.createVerifiedDomainWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling ");
    }

    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };

    var formParams = {
    };

    var authNames = ['basicAuth'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json', 'application/problem+json'];
    var returnType = 'application/json';

    return this.apiClient.callApi(
      '/verified-domains', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Add domain to account
   * Add a domain to the account.
   * @param {module:model/VerifiedDomains2} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/VerifiedDomains}
   */
  this.createVerifiedDomain = function(body) {
    return this.createVerifiedDomainWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * Delete domain
   * Delete a verified domain from the account.
   * @param {String} domainName The domain name.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  this.deleteDomainWithHttpInfo = function(domainName) {
    var postBody = null;

    // verify the required parameter 'domainName' is set
    if (domainName === undefined || domainName === null) {
      throw new Error("Missing the required parameter 'domainName' when calling ");
    }

    var pathParams = {
      'domain_name': domainName
    };
    var queryParams = {
    };
    var headerParams = {
    };

    var formParams = {
    };

    var authNames = ['basicAuth'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json', 'application/problem+json'];
    var returnType = 'application/json';

    return this.apiClient.callApi(
      '/verified-domains/{domain_name}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Delete domain
   * Delete a verified domain from the account.
   * @param {String} domainName The domain name.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  this.deleteDomain = function(domainName) {
    return this.deleteDomainWithHttpInfo(domainName)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * Get domain info
   * Get the details for a single domain on the account.
   * @param {String} domainName The domain name.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/VerifiedDomains} and HTTP response
   */
  this.getDomainWithHttpInfo = function(domainName) {
    var postBody = null;

    // verify the required parameter 'domainName' is set
    if (domainName === undefined || domainName === null) {
      throw new Error("Missing the required parameter 'domainName' when calling ");
    }

    var pathParams = {
      'domain_name': domainName
    };
    var queryParams = {
    };
    var headerParams = {
    };

    var formParams = {
    };

    var authNames = ['basicAuth'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json', 'application/problem+json'];
    var returnType = 'application/json';

    return this.apiClient.callApi(
      '/verified-domains/{domain_name}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Get domain info
   * Get the details for a single domain on the account.
   * @param {String} domainName The domain name.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/VerifiedDomains}
   */
  this.getDomain = function(domainName) {
    return this.getDomainWithHttpInfo(domainName)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * List sending domains
   * Get all of the sending domains on the account.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/VerifiedDomains1} and HTTP response
   */
  this.getVerifiedDomainsAllWithHttpInfo = function() {
    var postBody = null;

    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };

    var formParams = {
    };

    var authNames = ['basicAuth'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json', 'application/problem+json'];
    var returnType = 'application/json';

    return this.apiClient.callApi(
      '/verified-domains', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * List sending domains
   * Get all of the sending domains on the account.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/VerifiedDomains1}
   */
  this.getVerifiedDomainsAll = function() {
    return this.getVerifiedDomainsAllWithHttpInfo()
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * Verify domain
   * Verify a domain for sending.
   * @param {String} domainName The domain name.
   * @param {module:model/VerifyADomainForSending_} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/VerifiedDomains} and HTTP response
   */
  this.submitDomainVerificationWithHttpInfo = function(domainName, body) {
    var postBody = body;

    // verify the required parameter 'domainName' is set
    if (domainName === undefined || domainName === null) {
      throw new Error("Missing the required parameter 'domainName' when calling ");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling ");
    }

    var pathParams = {
      'domain_name': domainName
    };
    var queryParams = {
    };
    var headerParams = {
    };

    var formParams = {
    };

    var authNames = ['basicAuth'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json', 'application/problem+json'];
    var returnType = 'application/json';

    return this.apiClient.callApi(
      '/verified-domains/{domain_name}/actions/verify', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Verify domain
   * Verify a domain for sending.
   * @param {String} domainName The domain name.
   * @param {module:model/VerifyADomainForSending_} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/VerifiedDomains}
   */
  this.submitDomainVerification = function(domainName, body) {
    return this.submitDomainVerificationWithHttpInfo(domainName, body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }
};
