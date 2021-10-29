(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[112],{1663:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o={sidebar_position:6,description:"Migrations"},l={unversionedId:"migrating",id:"migrating",isDocsHomePage:!1,title:"Migrating to newer versions",description:"Migrations",source:"@site/../mdoc/target/mdoc/migrating.md",sourceDirName:".",slug:"/migrating",permalink:"/sttp-oauth2/docs/migrating",editUrl:"https://github.com/ocadotechnology/sttp-oauth2/edit/main/docs/migrating.md",version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,description:"Migrations"},sidebar:"tutorialSidebar",previous:{title:"Contributing to sttp-oauth2",permalink:"/sttp-oauth2/docs/contributing"}},s=[{value:"unreleased",id:"unreleased",children:[{value:"<code>SttpBackend</code> no more passed as implicit param",id:"sttpbackend-no-more-passed-as-implicit-param",children:[]},{value:"Split <code>ClientCredentialsProvider</code>",id:"split-clientcredentialsprovider",children:[]},{value:"Caching",id:"caching",children:[]},{value:"Apply",id:"apply",children:[]}]},{value:"v0.10.0",id:"v0100",children:[]},{value:"v0.5.0",id:"v050",children:[]}],p={toc:s};function d(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Some releases introduce breaking changes. This page aims to list those and provide migration guide."),(0,r.kt)("h2",{id:"unreleased"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/ocadotechnology/sttp-oauth2/releases/tag/v0.12.0"},"unreleased")),(0,r.kt)("h3",{id:"sttpbackend-no-more-passed-as-implicit-param"},(0,r.kt)("inlineCode",{parentName:"h3"},"SttpBackend")," no more passed as implicit param"),(0,r.kt)("p",null,"Applying ",(0,r.kt)("inlineCode",{parentName:"p"},"sttp")," convention, not to pass ",(0,r.kt)("inlineCode",{parentName:"p"},"SttpBackend")," as implicit param, all methods that require it (like constructor of ",(0,r.kt)("inlineCode",{parentName:"p"},"ClientCredentialsProvider"),") have been changed to require this as explicit parameter."),(0,r.kt)("p",null,"Change"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"implicit val backend: SttpBackend[IO, Any] = ???\nClientCredentialsProvider.instance[IO](tokenUrl, tokenIntrospectionUrl, clientId, clientSecret)\n")),(0,r.kt)("p",null,"into:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val backend: SttpBackend[IO, Any] = ???\nClientCredentialsProvider[IO](tokenUrl, tokenIntrospectionUrl, clientId, clientSecret)(backend)\n")),(0,r.kt)("h3",{id:"split-clientcredentialsprovider"},"Split ",(0,r.kt)("inlineCode",{parentName:"h3"},"ClientCredentialsProvider")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ClientCredentialsProvider")," has been split into ",(0,r.kt)("inlineCode",{parentName:"p"},"AccessTokenProvider")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"TokenIntrospection"),". This allows using better scoped traits without a need to provide redundant token introspection url if there is only need for requesting access tokens. "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ClientCredentialsProvider")," has been left as a sum of both traits for smoother migration, so in most cases no changes would be required during the migration."),(0,r.kt)("h3",{id:"caching"},"Caching"),(0,r.kt)("p",null,"In this release modules ",(0,r.kt)("inlineCode",{parentName:"p"},"oauth2-cache-xx")," have been introduced, that contain cache based ",(0,r.kt)("inlineCode",{parentName:"p"},"AccessTokenProvider")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"cats-effect2")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Future"),". This has lead to removal of ",(0,r.kt)("inlineCode",{parentName:"p"},"SttpOauth2ClientCredentialsCatsBackend")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"SttpOauth2ClientCredentialsFutureBackend"),". Instead a generic ",(0,r.kt)("inlineCode",{parentName:"p"},"SttpOauth2ClientCredentialsBackend")," should be used with a ",(0,r.kt)("inlineCode",{parentName:"p"},"AccessTokenProvider")," of your choice. "),(0,r.kt)("p",null,"To build cached ",(0,r.kt)("inlineCode",{parentName:"p"},"SttpBackend"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"replace dependency of ",(0,r.kt)("inlineCode",{parentName:"li"},"sttp-oauth2-backend-xx")," with ",(0,r.kt)("inlineCode",{parentName:"li"},"sttp-oauth2-cache-xx")),(0,r.kt)("li",{parentName:"ul"},"replace creation of ",(0,r.kt)("inlineCode",{parentName:"li"},"SttpOauth2ClientCredentialsXXXBackend")," with the following example adjusted to your needs:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val accessTokenProvider = AccessTokenProvider[IO](tokenUrl, clientId, clientSecret)(backend)\nCachingAccessTokenProvider.refCacheInstance[IO](accessTokenProvider).map { cachingAccessTokenProvider => \n    SttpOauth2ClientCredentialsBackend[IO, Any](cachingAccessTokenProvider)(scope)\n}\n")),(0,r.kt)("p",null,"For details please see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ocadotechnology/sttp-oauth2/pull/149"},"PR"),"."),(0,r.kt)("h3",{id:"apply"},"Apply"),(0,r.kt)("p",null,"In many companion objects factory methods called ",(0,r.kt)("inlineCode",{parentName:"p"},"instance")," have been replaced with ",(0,r.kt)("inlineCode",{parentName:"p"},"apply"),", so previous way of creating objects:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"ClientCredentialsProvider.instance[IO](tokenUrl, tokenIntrospectionUrl, clientId, clientSecret)\n")),(0,r.kt)("p",null,"needs to be replaced with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"ClientCredentialsProvider[IO](tokenUrl, tokenIntrospectionUrl, clientId, clientSecret)\n")),(0,r.kt)("h2",{id:"v0100"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/ocadotechnology/sttp-oauth2/releases/tag/v0.5.0"},"v0.10.0")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"authCodeToToken")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"refreshAccessToken")," no longer return fixed token response type. Instead, they require ",(0,r.kt)("inlineCode",{parentName:"p"},"RT <: OAuth2TokenResponse.Basic: Decoder")," type parameter, that describes desired. response structure."),(0,r.kt)("p",null,"There are two matching pre-defined types provided:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OAuth2TokenResponse")," - minimal response as described by ",(0,r.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc6749#section-5.1"},"rfc6749")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ExtendedOAuth2TokenResponse")," - previously known as ",(0,r.kt)("inlineCode",{parentName:"li"},"Oauth2TokenResponse"),", the previously fixed response type. Use this for backward compatiblity.")),(0,r.kt)("h2",{id:"v050"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/ocadotechnology/sttp-oauth2/releases/tag/v0.5.0"},"v0.5.0")),(0,r.kt)("p",null,"This version introduces ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ocadotechnology/sttp-oauth2/pull/39"},"sttp3"),". Please see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/softwaremill/sttp/releases/tag/v3.0.0"},"sttp v3.0.0 release")," for migration guide."))}d.isMDXComponent=!0}}]);