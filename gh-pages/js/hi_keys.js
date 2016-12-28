//
// My extension-01 
// Copyright (c) 2016 Masakatsu Sugimoto, Former Professor on Software Engineering at Tokyo University of Information Sciences: TUIS, Chiba, Japan, 
// all right reserved. 
// 2016.12.29
//
 new ( function() {

  var ext = this ;

  let name = 'Hi_ExEx001' ;

 // -----------------------------------------------------------
 // -----------------------------------------------------------
 // -----------------------------------------------------------

    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {} ;

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return { status : 2 , msg : 'Ready' } ;

    } ;

 // -----------------------------------------------------------
 // -----------------------------------------------------------
 // -----------------------------------------------------------


 ext.get_full_date_01 = function() {

       return get_full_date_01() ;

 } ;

 ext.get_full_e_date_01 = function() {

       return get_full_e_date_01() ;

 } ;

 ext.get_full_time_01 = function() {

       return get_full_time_01() ;

 } ;

 ext.get_full_e_time_01 = function() {

       return get_full_e_time_01() ;

 } ;

 ext.get_kakugen_01 = function() {

       return get_kakugen_01() ;

 } ;

 ext.get_proverb_01 = function() {

       return get_proverb_01() ;

 } ;

 ext.html5_tts_api = function( parm_s , callback ) {

       return html5_tts_api( parm_s , callback ) ;

 } ;


 ext.alert = function( message ) {

        alert01( message ) ;

 } ;

 ext.ask = function( question ) {

        return ask01( question ) ;

 } ;

 ext.confirm = function( question ) {

        return confirm01( question ) ;

 } ;

 ext.openTab = function( location ) {

      openTab01( location ) ;

 } ;

 ext.alert_version01 = function() {

      alert_version01() ;

 } ;

  // --------------------------------------------------------------------------
  // --------------------------------------------------------------------------
  // --------------------------------------------------------------------------

  ext.my_include = function( f_name ) {

       // alert( 'test my_include starts: ' + f_name ) ;

       $.getScript( f_name , function() {} ) ;

  } ;

// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
  // include js files
  // constant01.js
  ext.my_include( 'http://n-shk-ms.appspot.com/ms_scratch_extension/src/constant01.js' ) ;

  // is_english01.js
  ext.my_include( 'http://n-shk-ms.appspot.com/ms_scratch_extension/src/is_english01.js' ) ;

  // proverb01.js
  ext.my_include( 'http://n-shk-ms.appspot.com/ms_scratch_extension/src/proverb01.js' ) ;

  // kakugen01.js
  ext.my_include( 'http://n-shk-ms.appspot.com/ms_scratch_extension/src/kakugen01.js' ) ;

  // my_ext_functions01.js
  ext.my_include( 'http://n-shk-ms.appspot.com/ms_scratch_extension/src/my_ext_functions01.js' ) ;

// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------

    // Block and block menu descriptions
    var descriptor = {
        blocks : [

            [ 'r', '年何日', 'get_full_date_01' ] ,
            [ 'r', 'e-date', 'get_full_e_date_01' ] ,

            [ 'r', '今何時', 'get_full_time_01' ] ,
            [ 'r', 'e-time', 'get_full_e_time_01' ] ,

            [ 'r', '格言', 'get_kakugen_01' ] ,
            [ 'r', 'e-proverb', 'get_proverb_01' ] ,

            [ ' ', '表示 %s', 'alert', '日本の首都は東京です。' ] ,

            [ 'b', '確認 %s', 'confirm', '日本の首都は東京' ] ,

            [ 'r', '質問 %s', 'ask', 'お名前?' ] ,

            [' ', 'オープン・サイト %s', 'openTab', 'https://scratch.mit.edu/about'] ,

            [ 'w', '読上げ %s', 'html5_tts_api' , 'ありがとう' ] ,

        ]
    } ;

    // Register the extension
    ScratchExtensions.register( name , descriptor, ext ) ;

 })({}) ;

//
// End of program
//
