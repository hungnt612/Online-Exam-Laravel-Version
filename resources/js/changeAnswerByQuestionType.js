// Controll code: change html component by users option
$(document).ready(function() {
    $("#questionType").change(function() {
        var selectedValue = $(this)
            .find(":selected")
            .val();
        console.log(selectedValue);
        switch (selectedValue) {
            case "SC4":
                singleChoiceOfFour();
                break;
            case "MC4":
                multipleChoiceOfFour();
                break;
            case "TF":
                trueFalse();
                break;
            default:
                $("#answer-block").empty();
                break;
        }
    });
});
// Component using in answer block
function singleChoiceOfFour() {
    $("#answer-block").empty();

    $("#answer-block").append(`
        <div class="form-group">
        <label for"firstAnswer">First Answer</label>
        <input type="text" class="form-control" name="answer[1]">
        <div class="form-check">
            <input class="form-check-input" type="radio" name="is_correct[1]"  value="1">
            <label class="form-check-label" > is correct </label>
        </div>
        </div>

        <div class="form-group">
        <label for"firstAnswer">Second Answer</label>
        <input type="text" class="form-control" name="answer[2]">
        <div class="form-check">
            <input class="form-check-input" type="radio" name="is_correct[2]"  value="1">
            <label class="form-check-label" > is correct </label>
        </div>
        </div>
        <div class="form-group">
            <label for"firstAnswer">Third Answer</label>
            <input type="text" class="form-control" name="answer[3]">
            <div class="form-check">
                <input class="form-check-input" type="radio" name="is_correct[3]"  value="1">
                <label class="form-check-label" > is correct </label>
            </div>
        </div>
        <div class="form-group">
            <label for"firstAnswer">Fourth Answer</label>
            <input type="text" class="form-control" name="answer[4]">
            <div class="form-check">
                <input class="form-check-input" type="radio" name="is_correct[4]"  value="1">
                <label class="form-check-label" > is correct </label>
            </div>
        </div>
    `);
}

function multipleChoiceOfFour() {
    $("#answer-block").empty();

    $("#answer-block").append(`
        <div class="form-group">
        <label for"firstAnswer">First Answer</label>
        <input type="text" class="form-control" name="answer[1]">
        <div class="form-check">
            <input class="form-check-input" type="radio" name="is_correct"  value="1">
            <label class="form-check-label" > is correct </label>
        </div>
        </div>

        <div class="form-group">
        <label for"firstAnswer">Second Answer</label>
        <input type="text" class="form-control" name="answer[2]">
        <div class="form-check">
            <input class="form-check-input" type="radio" name="is_correct"  value="1">
            <label class="form-check-label" > is correct </label>
        </div>
        </div>
        <div class="form-group">
            <label for"firstAnswer">Third Answer</label>
            <input type="text" class="form-control" name="answer[3]">
            <div class="form-check">
                <input class="form-check-input" type="radio" name="is_correct"  value="1">
                <label class="form-check-label" > is correct </label>
            </div>
        </div>
        <div class="form-group">
            <label for"firstAnswer">Fourth Answer</label>
            <input type="text" class="form-control" name="answer[4]">
            <div class="form-check">
                <input class="form-check-input" type="radio" name="is_correct"  value="1">
                <label class="form-check-label" > is correct </label>
            </div>
        </div>
    `);
}

function trueFalse(){
    $("#answer-block").empty();
    $("#answer-block").append(`
        <div class="form-group">
        <label for"firstAnswer">First Answer</label>
        <input type="text" class="form-control" name="answer[1]">
        <div class="form-check">
            <input class="form-check-input" type="radio" name="is_correct" value="1">
            <label class="form-check-label" > is correct </label>
        </div>
        </div>

        <div class="form-group">
        <label for"firstAnswer">Second Answer</label>
        <input type="text" class="form-control" name="answer[2]">
        <div class="form-check">
            <input class="form-check-input" type="radio" name="is_correct"  value="1">
            <label class="form-check-label" > is correct </label>
        </div>
    `);
}
