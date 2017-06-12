'use strict';

eventsApp.controller('EventController', function($scope) {
    $scope.event = {
        name: 'Angular boot camp',
        date: '1/1/2013',
        time: '10:53 am',
        location: {
            address: 'Google headquarters',
            city: 'Mountain view',
            province: 'CA'
        },
        imageUrl: '/img/angularjs-logo.png',
        sessions: [
            {
                name: 'Directives Masterclass',
                creatorName: 'Bob Smith',
                duration: '1 hr',
                level: 'Advanced',
                abstract: 'In this session we will learn in and outs of directive'
            },
            {
                name: 'Scopes for fun and profit',
                creatorName: 'John doe',
                duration: '30 mins',
                level: 'Introductory',
                abstract: 'This session will take a closer look at scopes'
            },
            {
                name: 'Well Behaved Controllers',
                creatorName: 'Jane doe',
                duration: '2 hours',
                level: 'Intermediate',
                abstract: 'We will learn controllers in this'
            }
        ]
    };
});