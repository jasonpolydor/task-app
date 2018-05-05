Installing JWT on symfony api:
1. follow tutorial
https://github.com/lexik/LexikJWTAuthenticationBundle/blob/master/Resources/doc/index.md#getting-started

2. If error:
https://github.com/lexik/LexikJWTAuthenticationBundle/issues/86

3. Install FOSUserBundle
https://symfony.com/doc/current/bundles/FOSUserBundle/index.html

4. Rest Api symfony
https://www.cloudways.com/blog/rest-api-in-symfony-3-1/

5. services in symfony 3.4

dont forget to put public:true in App/config/service.yml under Bundle you want to create services
e.g.

	AppBundle\:
        resource: '../../src/AppBundle/*'
        # you can exclude directories or files
        # but if a service is unused, it's removed anyway
        exclude: '../../src/AppBundle/{Entity,Repository,Tests}'
        public: true

task.yml (service)

	services:
    		AppBundle\Service\Tasks\Listing:
        		arguments: ["@doctrine.orm.entity_manager"]