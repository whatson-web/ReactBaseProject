export default {
    items: [
        {
            name: 'Paramètres',
            roles: 'ROLE_ADMIN',
            icon: 'fa fa-cog',
            children: [
                {
                    name: 'Membres',
                    url: '/members',
                    roles: 'ROLE_ADMIN'
                },
            ]
        },
    ]
};