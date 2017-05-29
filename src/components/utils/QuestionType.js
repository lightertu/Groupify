/*
 * Created by Matt on 05/25/17
 * This file defines a List of Maps containing the question types and what features they might use
 */

import {Map, List} from 'immutable';


let QuestionTypes = Map({
    CircleSelection: Map({
        type:'CircleSelection',
        display:'Circle Selection',
        description:'This type allows participants to selected multiple answers from a list of options',
        options:Map({
            'tooltip':true,
            'tooltipHint':'Descripe the question to your participants',
            'tooltipLabel':'Description',
             
            'answersEnableMaximum':true,
            'answersEnableMaximumHint':'',
            'answersEnableMaximumTrueLabel':'Enabled',
            'answersEnableMaximumFalseLabel':'Disabled',
            
            'answersMaximum':true,
            'answersMaximumHint':'Maximum amount of answers allowed.',
            'answersMaximumLabel':'Maximum Answers Limit',
            
            'answersEnableMinimum':true,
            'answersEnableMinimumHint':'',
            'answersEnableMinimumTrueLabel':'Enabled',
            'answersEnableMinimumFalseLabel':'Disabled',
            
            'answersMinimum':true,
            'answersMinimumHint':'Minimum amount of answers allowed.',
            'answersMinimumLabel':'Minimum Answers Limit',

            'answersEnableFilter':false,
            'answersEnableFilterHint':'',
            'answersEnableFilterTrueLabel':'',
            'answersEnableFilterFalseLabel':'',
            
            'answersFilter':true,
            'answersFilterHint':'Participants will be able to choose from these options',
            'answersFilterLabel':'Options',
            
            'answersFilterEnableBlacklistMode':false,
            'answersFilterEnableBlacklistModeHint':'',
            'answersFilterEnableBlacklistModeTrueLabel':'',
            'answersFilterEnableBlacklistModeFalseLabel':'',
        })  
    }),
    MultiInputTextField: Map({
        type:'MultiInputTextField',
        display:'Multiple Answer Text-Field',
        description:'This type allows participants to enter multiple answers into a text field',
        options:Map({
            'tooltip':true,
            'tooltipHint':'Descripe the question to your participants',
            'tooltipLabel':'Description',
            
            'answersEnableMaximum':true,
            'answersEnableMaximumHint':'',
            'answersEnableMaximumTrueLabel':'Enabled',
            'answersEnableMaximumFalseLabel':'Disabled',
            
            'answersMaximum':true,
            'answersMaximumHint':'Maximum amount of answers allowed.',
            'answersMaximumLabel':'Maximum Answers Limit',
            
            'answersEnableMinimum':true,
            'answersEnableMinimumHint':'',
            'answersEnableMinimumTrueLabel':'Enabled',
            'answersEnableMinimumFalseLabel':'Disabled',
            
            'answersMinimum':true,
            'answersMinimumHint':'Minimum amount of answers allowed.',
            'answersMinimumLabel':'Minimum Answers Limit',
            
            'answersEnableFilter':true,
            'answersEnableFilterHint':'Limit the answers allowed to answers seperated by comma in this field.',
            'answersEnableFilterTrueLabel':'Enabled',
            'answersEnableFilterFalseLabel':'Disabled',
            
            'answersFilter':true,
            'answersFilterHint':'When filter is enabeled, only optiosn in this list can be selected',
            'answersFilterLabel':'Filter',
            
            'answersFilterEnableBlacklistMode':true,
            'answersFilterEnableBlacklistModeHint':'Blacklist: block filter entries. Whitelist: allow filter entries.',
            'answersFilterEnableBlacklistModeTrueLabel':'Blacklist',
            'answersFilterEnableBlacklistModeFalseLabel':'Whitelist',
        })  
    }),
    'SingleInputTextField': Map({
        type:'SingleInputTextField',
        display:'Single Answer Text-Field',
        description:'This type allows participants to enter a single textual answer',
        options:Map({
            'tooltip':true,
            'tooltipHint':'Descripe the question to your participants',
            'tooltipLabel':'Description',
            
            'answersEnableMaximum':true,
            'answersEnableMaximumHint':'',
            'answersEnableMaximumTrueLabel':'Enabled',
            'answersEnableMaximumFalseLabel':'Disabled',
            
            'answersMaximum':true,
            'answersMaximumHint':'Maximum amount of characters allowed.',
            'answersMaximumLabel':'Maximum Character Limit',
            
            'answersEnableMinimum':true,
            'answersEnableMinimumHint':'',
            'answersEnableMinimumTrueLabel':'Enabled',
            'answersEnableMinimumFalseLabel':'Disabled',
            
            'answersMinimum':true,
            'answersMinimumHint':'Minimum amount of characters allowed.',
            'answersMinimumLabel':'Minimum Characters Limit',
            
            'answersEnableFilter':true,
            'answersEnableFilterHint':'Limit the answers allowed to answers seperated by comma in this field.',
            'answersEnableFilterTrueLabel':'Enabled',
            'answersEnableFilterFalseLabel':'Disabled',
            
            'answersFilter':true,
            'answersFilterHint':'When filter is enabeled, only optiosn in this list can be selected',
            'answersFilterLabel':'Filter',
            
            'answersFilterEnableBlacklistMode':true,
            'answersFilterEnableBlacklistModeHint':'Blacklist: block filter entries. Whitelist: allow filter entries.',
            'answersFilterEnableBlacklistModeTrueLabel':'Blacklist',
            'answersFilterEnableBlacklistModeFalseLabel':'Whitelist',
        })  
    }),
});

export default QuestionTypes;
