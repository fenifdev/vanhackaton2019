import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import JobsScreen from '../screens/JobsScreen';
import EventsScreen from '../screens/EventsScreen';
import CoursesScreen from '../screens/CoursesScreen';
import CourseScreen from '../screens/CourseScreen';

const AppStack = createStackNavigator({ Jobs: JobsScreen, Events: EventsScreen, Courses: CoursesScreen, Course: CourseScreen });
const MyDrawerNavigator = createDrawerNavigator({ Jobs: JobsScreen, Events: EventsScreen, Courses: CoursesScreen, Course: CourseScreen });
const AuthStack = createStackNavigator({ Login: LoginScreen, Register: RegisterScreen });

const Navigator = createSwitchNavigator(
	{
      App: MyDrawerNavigator,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Auth',
    }
);

export default createAppContainer(Navigator);