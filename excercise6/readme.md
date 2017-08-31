## EXCERCISE 6.

```
Make a project of catalog-like SPA. It must have 3 types of users: buyers (explore, buy), sellers (add, sell), admins (all possible + extras) and implement basic trading with any payment provider.
We expect you to do the following:
Architecture diagram could be UML-like;
JS classes drafts;
A detailed plan on building Access control system.

```

## UML Diagram(use case diagram) is saved in jpg file located at same path as this file

## Detail plan on Access control system:

`
1. We can use client roles to distinguish them and show allowed content.
2. Client logs into our system and then we check for his role.
Sometime roles are stored somewhere with third vendor. In that case we have to validate users with vendor services and get roles from them.
3. we can have mapping in our database for roles and corresponding functionalities
4. we can show templates based on role of client. If client doesn't have any role then we can show him default functionalities in system or ask him to register in to system
5. Some clients might have multiple role then they are able to see multiple options available to those role.
5. Admin can change roles in system for each user.
`


##Flow of single page Application
`
1. Open login.html
2. Enter role (admin/ buyer/ seller) to login
3. Based on login role, template will be shown
4. In buyer template, client will have Buy Prodcut option. On Click of Buy now you will be navigated 	to Payment Gateway like paypal. Amount of selected prodcut will be displayed on Payment page of Paypal
5. In seller template, client will have add Product and remove product option
6. In admin template, admin will have optoins to add/remove products and also add/remove buyers and sellers
`


