'use strict';

var app = angular.module('eventsApp');
app.controller('EventController', function($scope) {
     $scope.sortorder = 'name';
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
                duration: 1,
                level: 'Advanced',
                abstract: 'In this session we will learn in and outs of directive',
                upVoteCount: 0
            },
            {
                name: 'Scopes for fun and profit',
                creatorName: 'John doe',
                duration: 2,
                level: 'Introductory',
                abstract: 'This session will take a closer look at scopes',
                upVoteCount: 0
            },
            {
                name: 'Well Behaved Controllers',
                creatorName: 'Jane doe',
                duration: 4,
                level: 'Intermediate',
                abstract: 'We will learn controllers in this',
                upVoteCount: 0
            }
        ]
    },
    $scope.upVoteSession = function(session) {
        session.upVoteCount++;
    },
    $scope.downVoteSession = function(session) {
        session.upVoteCount--;
    }
});