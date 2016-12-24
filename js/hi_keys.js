//
// My extension-01 
// Copyright (c) 2016 Masakatsu Sugimoto, Former Professor on Software Engineering at Tokyo University of Information Sciences: TUIS, Chiba, Japan, 
// all right reserved. 
// 2016.12.17
//
 new ( function() {

  var ext = this ;

  let name = 'Hi!-keys' ;

  // ---------------------------------------------------------------------
  //
  const youbi01 = [ '日曜日' , '月曜日' , '火曜日' , '水曜日' , '木曜日' , '金曜日' , '土曜日' ] ; // 曜日, 配列リテラル

  const day_name01 = [ 'Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' ] ; 

  const month_name01 = [ 'January' , 'Feburary' , 'March' ,
                         'April',    'May' ,      'June' , 
                         'July',     'August' ,   'September' ,
                         'October' , 'November' , 'December'
                      ] ;

  const ordinal_number01 = [ 
'dummy' ,
'first' , 'second' , 'third' , 'fourth' , 'fifth' , 
'sixth' , 'seventh' , 'eighth' , 'ninth' , 'tenth' , 
'eleventh' , 'twelfth' , 'thirteenth' , 'fourteenth' , 'fifteenth' , 
'sixteenth' , 'seventeenth' , 'eighteenth' , 'nineteenth' , 'twentieth' , 
'twenty first' , 'twenty second' , 'twenty third' , 'twenty fourth' , 'twenty fifth' , 
'twenty sixth' , 'twenty seventh' , 'twenty eighth' , 'twenty ninth' , 'thirtieth' , 
'thirty firtst' 

 ] ;


  const kakugen01 = [ 

  '元気を出しなさい。今日の失敗ではなく、明日訪れるかもしれない成功について考えるのです。　ヘレンケラー' ,

  'あなたの周りにいる人、あなたの周りにある物。　すべてがあなたの先生です。ケン・ケイエス・ジュニア' ,

  '人生は七転び八起きだ。　立ち上がり続ければ勝つんだよ。　ナナ' ,

  '幸福というものはささやかなもので、そのささやかなものを愛する人が、本当の幸福をつかむ。　亀井　勝一郎' ,

  '人間、志を立てるのに遅すぎるということはない。　ボールドウィン' ,

  'あきらめたらそこで試合終了だよ。　スラムダンク' ,

  'こけたら立ちなはれ。　松下幸之助' , 

  '敵と戦う時間は短い。自分との戦いこそが勝敗を分ける。　王貞治'

 ] ;



  const proverb01 = [ 

  'A bird in the hand is worth two in the bush.' ,

  'A change is as good as a rest.' ,

  'A drowning man will catch at a straw.' ,

  'Better be the head of a dog than the tail of a lion.' ,

  'Better late than never' ,

  'Catch the bear before you sell its skin.' ,

  'Cleanliness is next to goodliness.' ,

  'Constant dropping wears away a stone.' ,

  'Divide and conquer.' ,

  'Early to bed and early to rise makes a man healthy, wealthy and wise.' ,

  'Every little helps.' ,

  'Fact is stranger than fiction.' ,

  'Failue teaches success.' ,

  'Fast bind, fast find.' ,

  'First catch your hare.' ,

  'Give and take is fair play.' ,

  'Give and take is fair play.' ,

  'God helps them who help themselves.' ,

  'Union is strength.' ,

  'United we stand, divided we fall.' ,

  'Variety is the spice of life.' ,

  'Want is the mother of industry.' ,

  'One cannot put back the clock.' ,

  'One eyewitness is better than ten hearsays' ,

  'Practice makes perfect.' ,

  'Roma was not built in a day.' ,

  'Second thoughts are best. ' ,

  'See Naples and die.' ,

  'Seeing is believing.' ,

  'Short debts make long friends.' ,

  'The best doctors are Dr. Diet, Dr. Quiet, and Dr. Merryman.' ,

  'The darkest hour is that before the dawn.' ,

  'Use legs and have legs.' ,

  'Venture not all in one buttom.' 


 ] ;// end proverb01

 // -----------------------------------------------------------
 // -----------------------------------------------------------
 // -----------------------------------------------------------

  function is_alphanumeric( p_str ) {

       let first_char01 = p_str.charCodeAt( 0 ) ;

       if ( !( first_char01 > 47 && first_char01 < 58 ) &&  // numeric 0 - 9
            !( first_char01 > 64 && first_char01 < 91 ) &&  // A - Z
            !( first_char01 > 96 && first_char01 < 123 )    // a - z
          ) return false ;

       return true ;

  } // end is_alphanumeric

  ext.get_full_date_01 = function() {

        let date01 = new Date() ;

        let year01 = date01.getFullYear() ;

        let month01 = date01.getMonth() ;

        let day01   = date01.getDate() ;

        let day02   = date01.getDay() ; // index

        let day03  = youbi01[ day02 ] ;

        // 平成
 
        let h_year01 = year01 - 1988 ;

        let full_date01 = '　' + year01 + '年(平成' + h_year01+ '年)' + month01 + '月' + day01 + '日:' + day03 ;
        // alert( full_date01 ) ;

        return full_date01 ;

  } // end get_full_date_01


  ext.get_full_e_date_01 = function() {

        let date01 = new Date() ;

        let year01 = date01.getFullYear() ;

        let month01 = date01.getMonth() ;

        // alert( 'M' + month01 ) ;

        let month_name_v = month_name01[ month01 ] ;

        let day01   = date01.getDate() ;

        // alert( 'D' + day01 ) ; 

        let day_index01 = date01.getDay() ;

        // alert( 'D index: ' + day_index01 ) ; 

        let day_ordinal01 = ordinal_number01[ day01 ] ;

        let day_name_v01 = day_name01[ day_index01 ] ; 

        let full_date01 = year01 + ' ' + month_name_v + ' ' + day_ordinal01 + ' ' + day_name_v01 ;

        return full_date01 ;

  } // end get_full_e_date_01





  ext.get_full_time_01 = function() {

        let date01 = new Date() ;

        var time_hours01 = date01.getHours() ;

        var gozen_gogo01 ; // 午前/午後

        if ( time_hours01 >= 12 ) {

                gozen_gogo01 = '午後' ;

                time_hours01 = time_hours01 - 12 ;

        } else {

                gozen_gogo01 = '午前' ;

        }
        //
        // alert( time_hours01 ) ;
        //
        let time_minites = date01.getMinutes() ;
        // let time_seconds = date01.getSeconds() ;

        var return_value01 = gozen_gogo01 + time_hours01 + '時' ;

        if ( time_minites != 0 ) {
              return_value01 = return_value01 + time_minites + '分'  ; 
        } ;

        // alert( return_value01 ) ;

        return return_value01 ;

  } ; // end get_full_time_01


  ext.get_full_e_time_01 = function() {

        let date01 = new Date() ;

        var time_hours01 = date01.getHours() ;
        //
        let time_minites = date01.getMinutes() ;
        // let time_seconds = date01.getSeconds() ;

        var return_value01 = time_hours01 + ':' ;

        if ( time_minites != 0 ) {
              return_value01 = return_value01 + time_minites  ; 
        } ;

        return return_value01 ;

  } ; // end get_full_e_time_01()


  ext.get_kakugen_01 = function() {

       let random01 = Math.random() ;

       // alert( random01 ) ;

       var index01 = random01 * kakugen01.length ;

       index01 = Math.floor( index01 ) ;

       return kakugen01[ index01 ] ;

 } // end get_kakugen_01

  ext.get_proverb_01 = function() {

       let random01 = Math.random() ;

       // alert( random01 ) ;

       var index01 = random01 * proverb01.length ;

       index01 = Math.floor( index01 ) ;

       return proverb01[ index01 ] ;

 } // end get_proverb_01

// -----------------------------------------------------------------
// -----------------------------------------------------------------
// -----------------------------------------------------------------

    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {} ;

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return { status : 2 , msg : 'Ready' } ;

    } ;

    // ---------------------------------------------------------------------
    // ---------------------------------------------------------------------
    // ---------------------------------------------------------------------
    // 

    ext.html5_tts_api = function( parm_s , callback ) { 

              const s_max = 120 ;

              let s = parm_s.toString() ;

              var s01 ;

              if ( s.length > s_max ) { // s truncated to to s_max

                    s01 = s.substr( 0 , s_max ) ;

                    alert( 'Your text length is ' + s.length + '. It would be truncated to ' + s_max + '. ' ) ;

              } else {

                    s01 = s ;
              } 

              var u = new SpeechSynthesisUtterance( ' ' + s01 ) ;

              if ( is_alphanumeric( s ) ) {
                   
                    u.lang = 'en-US' ;

              } else {
                   
                    u.lang = 'ja-JP' ;

              } ;

              if ( typeof callback == 'function' ) callback() ;
        
              speechSynthesis.speak( u ) ;

    } ;

    ext.alert = function( message ) {

        alert( message ) ;

    } ;

    ext.ask = function( question ) {

        return prompt( question ) ;

    } ;

    ext.confirm = function( question ) {

        return confirm( question ) ;

    } ;

    ext.openTab = function( location ) {

        window.open( location , '_blank' ) ;

    };


    // end ext functions ---------------------------------------------

    // Block and block menu descriptions
    var descriptor = {
        blocks : [

            [ 'r', '年何日', 'get_full_date_01' ] ,
            [ 'r', 'date', 'get_full_e_date_01' ] ,

            [ 'r', '今何時', 'get_full_time_01' ] ,
            [ 'r', 'time', 'get_full_e_time_01' ] ,

            [ 'r', '格言', 'get_kakugen_01' ] ,
            [ 'r', 'proverb', 'get_proverb_01' ] ,

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
