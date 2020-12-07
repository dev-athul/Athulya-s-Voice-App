var talkDiv = document.getElementsByClassName('text')[0];
var button=document.getElementsByClassName('speak')[0];

const speechRecognition = window.SpeechRecognition||window.webkitSpeechRecognition;
const recognition = new speechRecognition();
button.addEventListener('click', ()=>{
    recognition.start();
})

recognition.onstart=function(){
    console.log('speak now');
}

recognition.onresult=function(event){
    const transcript=event.results[event.resultIndex][0].transcript;
    talkDiv.textContent=transcript;
    readOutLoad(transcript);
}

function readOutLoad(message){
    const speech = new SpeechSynthesisUtterance();
    speech.volume=1;
    speech.rate=.8;
    speech.text='I dont know, what you are speaking'
    if(message.includes('do you know me')){
        speech.text='Yeah, I do, You are Athulya from Wadakkancherry, BA English student in Co-operative Arts and Science College.';
    }
    if(message.includes('best friend')){
        speech.text='Your Best friends are Anjali, Shahnas from School and Harishma from neighbourhood. You also have a cat, munnu.'
    }
    if(message.includes('spend time')){
        speech.text='You spend time on Whatsapp and Instagram. You have 945 followers in Instagram. You also spend time by watching movies and youtube series like karikku, chakka pazham or ahaanas videos'
    }

    window.speechSynthesis.speak(speech);
}