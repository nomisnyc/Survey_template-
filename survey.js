$(document).ready(function(){
    var totalQuestions = $('.questions').length;
    var currentQuestion = 0;
    $questions = $('.questions');
    $questions.hide();
    $($questions.get(currentQuestion)).fadeIn();
    $('.next').click(function () {
         $($questions.get(currentQuestion)).fadeOut(function () {
            currentQuestion = currentQuestion + 1;
            $($questions.get(currentQuestion)).fadeIn();
        });

    });
    $('.back').click(function () {
         $($questions.get(currentQuestion)).fadeOut(function () {
            currentQuestion = currentQuestion - 1;
            $($questions.get(currentQuestion)).fadeIn();
        });

    });
});

    function getQuestion(GrpName) {
        var sel = document.getElementsByName(GrpName);
        var find = -1;
        var string = '';
        for (var i=0; i<sel.length; i++) {
        if (sel[i].checked === true) { string = sel[i].value;  find = i; }
        }
        return string;
    }

    function validateform() {
        var q1 = getQuestion('q1');
        var q2 = getQuestion('q2');
        var q3 = getQuestion('q3');
        var q4 = getQuestion('q4');
        var q5 = getQuestion('q5');
        var q6 = getQuestion('q6');
        var q7 = getQuestion('q7');
        var questionAnswer = q1+q2+q3+q4+q5+q6+q7;
        var answerTotal = +q1 + +q2 + +q3 + +q4 + +q5 + +q6 + +q7;

        var packJSON = JSON.stringify({questionAnswer, answerTotal});
        $.ajax({

            type: 'post',
            dataType: 'json',
            data: { data: packJSON},
            contentType: 'application/json; charset=utf-8',
            success: function (l) {
                console.log('Done with json package');
            }
        });
        console.log('json package');

        if (questionAnswer.length < 7) { alert('You missed question(s)'); return;}
        // } else { window.open(document.location.href = qans+'.html');
        // };
        console.log(answerTotal);
        // document.location.href = qans+'.html';
        //  window.open(qans+'.html');

        if(answerTotal == 0){ alert('red0')};
        if(answerTotal == 1){ alert('blue1')};
        if(answerTotal == 2){ alert('green2')};
        if(answerTotal == 3){ alert('orange3')};
        if(answerTotal == 4){ alert('yellow4')};
        if(answerTotal == 5){ alert('black5')};
        if(answerTotal == 6){ alert('brown6')};
        if(answerTotal == 7){ alert('purple7')};
    }
