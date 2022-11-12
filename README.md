# Attempt to use Firebase in LWC
- Conclusion Fail - LWC cannot import Javascript library with multiple module. Even when firebase javascirpt was loaded as static resource, simple app initialization failed.


# How to use it
1. Create scratch org
1. Push this repo using command `sfdx force:source:push`
1. Assign permission set to logged in user using command `sfdx force:user:permset:assign --permsetname Firebase`