import {createAction, handleActions} from 'redux-actions';
import {pender} from 'redux-pender';

import {Map} from 'immutable';

import * as api from 'lib/api';

//action types
const OPEN_SIDE_MENU = 'base/OPEN_SIDE_MENU';
const CLOSE_SIDE_MENU = 'base/CLOSE_SIDE_MENU';
const SHOW_MODAL = 'base/SHOW_MODAL';
const HIDE_MODAL = 'base/HIDE_MODAL';
const CHECK_LOGIN = 'base/CHECK_LOGIN';
const GET_INITIAL_DATA = 'base/GET_INITIAL_DATA'; //접속 시 촉 데이터 가져오기.
const LOGOUT = 'base/LOGOUT';
const SET_HEAD_TITLE = 'base/SET_HEAD_TITLE'; //헤드 타이틀 변경
const SET_HEAD_DESCRIPTION = 'base/SET_HEAD_DESCRIPTION';
const SHOW_LOADING_ACTION = 'base/SHOW_LOADING_ACTION';
const HIDE_LOADING_ACTION = 'base/HIDE_LOADING_ACTION';
const SET_LINK = 'base/SET_LINK';
const SET_STAGGER_PANNEL_BG = 'base/SET_STAGGER_PANNEL_BG'; //로딩 액션 패널 색 변경

//action creators
export const openSideMenu = createAction(OPEN_SIDE_MENU);
export const closeSideMenu = createAction(CLOSE_SIDE_MENU);
export const showModal = createAction(SHOW_MODAL);
export const hideModal = createAction(HIDE_MODAL);
export const checkLogin = createAction(CHECK_LOGIN, api.check_login, meta=>meta);
export const logout = createAction(LOGOUT, api.logout);
export const getInitialData = createAction(GET_INITIAL_DATA, api.getInitialData);
export const setHeadTitle = createAction(SET_HEAD_TITLE);
export const setHeadDescription = createAction(SET_HEAD_DESCRIPTION);
export const showLoadingAction = createAction(SHOW_LOADING_ACTION);
export const hideLoadingAction = createAction(HIDE_LOADING_ACTION);
export const setLink = createAction(SET_LINK);
export const setStaggerPannelBg = createAction(SET_STAGGER_PANNEL_BG);

//initial state
const initialState = Map({
   //모달의 가시성 상태
   modal: Map({
      login: false,
      categoryForm: false,
      toDoForm: false,
   }),
   //로딩 액션의 가시성 상태
   loadingAction: Map({
      staggerPannel: false,
   }),
   staggerPannelBg: '#ff9547', //로딩 액션 패널 배경색
   isSideMenuOpen: false, //사이드 메뉴 가시성 상태
   link: null,
   isLogged: false,
   headTitle: '', //헤드 타이틀 값
   headDescription: '',
   menu: [
      {
         text: 'ABOUT',
         link: '/about',
         bg: '#f7fe00'
      }, {
         text: 'CONTACT',
         link: '/contact',
         bg: '#24c7b1'
      }
   ]
});

export default handleActions({
   [OPEN_SIDE_MENU]: (state, action)=>{
      return state.set('isSideMenuOpen', true);
   },
   [CLOSE_SIDE_MENU]: (state, action)=>{
      return state.set('isSideMenuOpen', false);
   },
   [SHOW_MODAL]: (state, action)=>{
      const {payload: modalName} = action;
      return state.setIn(['modal', modalName], true);
   },
   [HIDE_MODAL]: (state, action)=>{
      const {payload: modalName} = action;
      return state.setIn(['modal', modalName], false);
   },
   [SHOW_LOADING_ACTION]: (state, action)=>{
      const {payload: actionName} = action;
      return state.setIn(['loadingAction', actionName], true);
   },
   [HIDE_LOADING_ACTION]: (state, action)=>{
      const {payload: actionName} = action;
      return state.setIn(['loadingAction', actionName], false);
   },
   [SET_HEAD_TITLE]: (state, action)=>{
      return state.set('headTitle', action.payload);
   },
   [SET_HEAD_DESCRIPTION]: (state, action)=>{
      return state.set('headDescription', action.payload.slice(0, 200));
   },
   [SET_LINK]: (state, action)=>{
      return state.set('link', action.payload);
   },
   [SET_STAGGER_PANNEL_BG]: (state, action)=>{
      return state.set('staggerPannelBg', action.payload);
   },
   ...pender({
      type: CHECK_LOGIN,
      onSuccess: (state, action)=>{
         const {logged:isLogged} = action.payload.data;
         return state.set('isLogged', isLogged);
      },
      onError: (e)=>{
         console.log(e);
      }
   }),
   ...pender({
      type: LOGOUT,
      onSuccess: (state, action)=>{
         return state.set('isLogged', false);
      },
   }),
   ...pender({
      type: GET_INITIAL_DATA,
      onSuccess: (state, action)=>{
         const {logged: isLogged} = action.payload.data;
         return state.set('isLogged', isLogged);
      }
   })
}, initialState);