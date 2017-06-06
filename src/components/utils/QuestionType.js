/*
 * Created by Matt on 05/25/17
 * This file defines a List of Maps containing the question types and what features they might use
 */

import {Map, List} from 'immutable';


let QuestionTypes = Map({
    TimeAvailability: Map({
        type:'TimeAvailability',
        display:'Time Availability',
        description:'This type allows participants to select days of the week',
        options:Map({
            'tooltip':true,
            'tooltipHint':'Descripe the question to your participants',
            'tooltipLabel':'Description',
            
            'answersEnableMaximum':true,
            'answersEnableMaximumHint':'This toggle enables the maximum answers limit',
            'answersEnableMaximumTrueLabel':'Enabled',
            'answersEnableMaximumFalseLabel':'Disabled',
            
            'answersMaximum':true,
            'answersMaximumHint':'Maximum amount of answers allowed.',
            'answersMaximumLabel':'Maximum Answers Limit',
            
            'answersEnableMinimum':true,
            'answersEnableMinimumHint':'This toggle enables the minimum answers limit',
            'answersEnableMinimumTrueLabel':'Enabled',
            'answersEnableMinimumFalseLabel':'Disabled',
            
            'answersMinimum':true,
            'answersMinimumHint':'Minimum amount of answers allowed. (Must be less than 8)',
            'answersMinimumLabel':'Minimum Answers Limit',
            
            'answersEnableFilter':false,
            'answersEnableFilterHint':'When filter is enabeled, only options in this list can be selected',
            'answersEnableFilterTrueLabel':'Enabled',
            'answersEnableFilterFalseLabel':'Disabled',
            
            'answersFilter':false,
            'answersFilterHint':'When filter is enabeled, participant will only be able to select answers from this field',
            'answersFilterLabel':'Limit Options',
            
            'answersFilterEnableBlacklistMode':false,
            'answersFilterEnableBlacklistModeHint':'Blacklist: block filter entries. Whitelist: allow filter entries.',
            'answersFilterEnableBlacklistModeTrueLabel':'Blacklist',
            'answersFilterEnableBlacklistModeFalseLabel':'Whitelist',
        })  
    }),
    ProgrammingLanguages: Map({
        type:'ProgrammingLanguages',
        display:'Programming Languages',
        description:'This type allows participants select programming languages',
        options:Map({
            'tooltip':true,
            'tooltipHint':'Descripe the question to your participants',
            'tooltipLabel':'Description',
            
            'answersEnableMaximum':true,
            'answersEnableMaximumHint':'This toggle enables the maximum answers limit',
            'answersEnableMaximumTrueLabel':'Enabled',
            'answersEnableMaximumFalseLabel':'Disabled',
            
            'answersMaximum':true,
            'answersMaximumHint':'Maximum amount of answers allowed.',
            'answersMaximumLabel':'Maximum Answers Limit',
            
            'answersEnableMinimum':true,
            'answersEnableMinimumHint':'This toggle enables the minimum answers limit',
            'answersEnableMinimumTrueLabel':'Enabled',
            'answersEnableMinimumFalseLabel':'Disabled',
            
            'answersMinimum':true,
            'answersMinimumHint':'Minimum amount of answers allowed.',
            'answersMinimumLabel':'Minimum Answers Limit',
            
            'answersEnableFilter':false,
            'answersEnableFilterHint':'Toggles between Limited and Unlimited answers. In Limited mode, studennts can only choose from this list of options. in Unlimited mode, Students may add their own answers',
            'answersEnableFilterTrueLabel':'Limited',
            'answersEnableFilterFalseLabel':'Unlimited',
            
            'answersFilter':false,
            'answersFilterHint':'When filter is enabeled, participant will only be able to select answers from this field',
            'answersFilterLabel':'Options',
            
            'answersFilterEnableBlacklistMode':false,
            'answersFilterEnableBlacklistModeHint':'Blacklist: block filter entries. Whitelist: allow filter entries.',
            'answersFilterEnableBlacklistModeTrueLabel':'Blacklist',
            'answersFilterEnableBlacklistModeFalseLabel':'Whitelist',
        })  
    }),
    CircleSelection: Map({
        type:'CircleSelection',
        display:'Radio Button Selection',
        description:'This type allows participants to toggle choises from a set of radio buttons representing options',
        options:Map({
            'tooltip':true,
            'tooltipHint':'Descripe the question to your participants',
            'tooltipLabel':'Description',
             
            'answersEnableMaximum':true,
            'answersEnableMaximumHint':'This toggle enables the maximum answers limit',
            'answersEnableMaximumTrueLabel':'Enabled',
            'answersEnableMaximumFalseLabel':'Disabled',
            
            'answersMaximum':true,
            'answersMaximumHint':'Maximum amount of answers allowed.',
            'answersMaximumLabel':'Maximum Answers Limit',
            
            'answersEnableMinimum':true,
            'answersEnableMinimumHint':'This toggle enables the minimum answers limit',
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
            'answersEnableMaximumHint':'This toggle enables the maximum answers limit',
            'answersEnableMaximumTrueLabel':'Enabled',
            'answersEnableMaximumFalseLabel':'Disabled',
            
            'answersMaximum':true,
            'answersMaximumHint':'Maximum amount of answers allowed.',
            'answersMaximumLabel':'Maximum Answers Limit',
            
            'answersEnableMinimum':true,
            'answersEnableMinimumHint':'This toggle enables the minimum answers limit',
            'answersEnableMinimumTrueLabel':'Enabled',
            'answersEnableMinimumFalseLabel':'Disabled',
            
            'answersMinimum':true,
            'answersMinimumHint':'Minimum amount of answers allowed.',
            'answersMinimumLabel':'Minimum Answers Limit',
            
            'answersEnableFilter':true,
            'answersEnableFilterHint':'When filter is enabeled, only options in this list can be selected',
            'answersEnableFilterTrueLabel':'Enabled',
            'answersEnableFilterFalseLabel':'Disabled',
            
            'answersFilter':true,
            'answersFilterHint':'When filter is enabeled, participant will only be able to select answers from this field',
            'answersFilterLabel':'Limit Options',
            
            'answersFilterEnableBlacklistMode':false,
            'answersFilterEnableBlacklistModeHint':'Blacklist: block filter entries. Whitelist: allow filter entries.',
            'answersFilterEnableBlacklistModeTrueLabel':'Blacklist',
            'answersFilterEnableBlacklistModeFalseLabel':'Whitelist',
        })  
    }),
    'SingleInputTextField': Map({
        type:'SingleInputTextField',
        display:'Text Field',
        description:'This type allows participants to enter information into an Open-Ended Text Field',
        options:Map({
            'tooltip':true,
            'tooltipHint':'Descripe the question to your participants',
            'tooltipLabel':'Description',
            
            'answersEnableMaximum':false,
            'answersEnableMaximumHint':'',
            'answersEnableMaximumTrueLabel':'Enabled',
            'answersEnableMaximumFalseLabel':'Disabled',
            
            'answersMaximum':false,
            'answersMaximumHint':'Maximum amount of characters allowed.',
            'answersMaximumLabel':'Maximum Character Limit',
            
            'answersEnableMinimum':false,
            'answersEnableMinimumHint':'',
            'answersEnableMinimumTrueLabel':'Enabled',
            'answersEnableMinimumFalseLabel':'Disabled',
            
            'answersMinimum':false,
            'answersMinimumHint':'Minimum amount of characters allowed.',
            'answersMinimumLabel':'Minimum Character Limit',
            
            'answersEnableFilter':false,
            'answersEnableFilterHint':'Limit the answers allowed to only these options.',
            'answersEnableFilterTrueLabel':'Enabled',
            'answersEnableFilterFalseLabel':'Disabled',
            
            'answersFilter':false,
            'answersFilterHint':'When filter is enabeled, only options in this list can be selected',
            'answersFilterLabel':'Filter',
            
            'answersFilterEnableBlacklistMode':false,
            'answersFilterEnableBlacklistModeHint':'Blacklist: block filter entries. Whitelist: allow filter entries.',
            'answersFilterEnableBlacklistModeTrueLabel':'Blacklist',
            'answersFilterEnableBlacklistModeFalseLabel':'Whitelist',
        })  
    }),
});

export default QuestionTypes;
