let voters = [];
let democratCandidates = [];
let republicanCandidates = [];
let independentCandidates = [];

class Person {
    constructor(name){
        this.name = name;
    }
}

class Voter extends Person{
    constructor(name, ideology){
        super(name);
        this.ideology = ideology;
    }
    newVoter() {
        voters.push(this.name)
    }
}
class Candidate extends Person{
    constructor(name, party){
        super(name);
        this.party = party;
        this.votes = 0
    }
    newCandidate(){
        if (this.party===democratCandidates) {
            return democratCandidates.push(this.party)
        }
        else if (this.party===republicanCandidates) {
            return republicanCandidates.push(this.party)
        }
        else {return independentCandidates.push(this.party)}
    }
}

//Add an event listener for the submit event of the Voter form. The event handler for this event should take the values in both the form text input and dropdown and create a new Voter instance. Afterwards it must create an <li> DOM element with the following class "list-group-item". Then it must append said <li> to the <ul> in the voter list <div>.

$('#voter-form').submit((e) => {
    e.preventDefault();
    
    $.get('/users', function (data) {
        data.forEach(el => {
            let li = $('<li></li>').text(el.first_name);
            $(li).addClass('person-li');
            $('#people-list').append(li);

            let name = $('#fetch-data-name').val();
            let lastName = $('#fetch-data-lastName').val();
            let email = $('#fetch-data-email').val();
            let li = $('<li></li>').text(`${name}\n${lastName}\n${email}`);
            $('#person-list').append(li);
})




