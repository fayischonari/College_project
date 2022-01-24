export const navigations = [
    {
        name: 'Dashboard',
        path: '/dashboard/default',
        icon: 'dashboard',
    },
    // {
    //     label: 'PAGES',
    //     type: 'label',
    // },
    {
        name: 'Date',
        icon: 'security',
        children: [
            {
                name: ' Edition',
                iconText: 'SI',
                path: '/session/signin',
            },
            {
                name: 'Date',
                iconText: 'SU',
                path: '/session/signup',
            },
            {
                name: 'Starting Time',
                iconText: 'FP',
                path: '/session/forgot-password',
            },
            {
                name: 'Ending Time',
                iconText: '404',
                path: '/session/404',
            },
        ],
    },
    // {
    //     label: 'Components',
    //     type: 'label',
    // },
    {
        name: 'Candidate',
        icon: 'favorite',
        children: [
            {
                name: 'Post',
                path: '/material/autocomplete',
                iconText: 'A',
            },
            {
                name: 'Candidate Name',
                path: '/material/buttons',
                iconText: 'B',
            },
            {
                name: 'Department',
                path: '/material/checkbox',
                iconText: 'C',
            },
            {
                name: 'Semester',
                path: '/material/dialog',
                iconText: 'D',
            },
            {
                name: 'Addmission No.',
                path: '/material/expansion-panel',
                iconText: 'E',
            },
            {
                name: 'If any backlogs?',
                path: '/material/form',
                iconText: 'F',
            },
            
        ],
    },
    {
        name: ' Voters List',
        icon: 'favorite',
        children: [
            {
                name: 'Post',
                path: '/material/autocomplete',
                iconText: 'A',
            },
            
        ],
    },
    {
        name: 'Charts',
        icon: 'trending_up',

        children: [
            {
                name: 'Echarts',
                path: '/charts/echarts',
                iconText: 'E',
            },
        ],
    },
    {
        name: 'Documentation',
        icon: 'launch',
        type: 'extLink',
        path: 'http://demos.ui-lib.com/matx-react-doc/',
    },
]
