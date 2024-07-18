function choisir_semester() {
    const choisir_semester = document.getElementById('choisir_semester').value;
    document.getElementById('semester1').style.display = choisir_semester == 1 ? 'block' : 'none';
    document.getElementById('semester2').style.display = choisir_semester == 2 ? 'block' : 'none';
}
function control_de_saisi(value)
{
    return value>=0 && value<=20;
}
function calculateScore(semester) {
    let score_final;
    let aff = '';
    affichage_bonde='';


    if (semester == 1) {
        const algo1cc = parseFloat(document.getElementById('algo1cc').value) || 0;
        const algo1exam = parseFloat(document.getElementById('algo1exam').value) || 0;
        const app0 = parseFloat(document.getElementById('app0').value) || 0;
        const frcc = parseFloat(document.getElementById('frcc').value) || 0;
        const frtp = parseFloat(document.getElementById('frtp').value) || 0;
        const frexam = parseFloat(document.getElementById('frexam').value) || 0;
        const infographie = parseFloat(document.getElementById('infographie').value) || 0;
        const math1cc = parseFloat(document.getElementById('math1cc').value) || 0;
        const math1tp = parseFloat(document.getElementById('math1tp').value) || 0;
        const math1exam = parseFloat(document.getElementById('math1exam').value) || 0;
        const prog1cc = parseFloat(document.getElementById('prog1cc').value) || 0;
        const prog1exam = parseFloat(document.getElementById('prog1exam').value) || 0;
        const reseaucc = parseFloat(document.getElementById('reseaucc').value) || 0;
        const reseauexam = parseFloat(document.getElementById('reseauexam').value) || 0;
if(![algo1cc,algo1exam,app0,frcc,frtp,frexam,infographie,math1cc,math1exam,math1tp,prog1cc,prog1exam,reseaucc,reseauexam].every(control_de_saisi))
{
    alert('Error_controle de saisie:\n Il faut les nbres entiers entre 0 et 20');
    return;
}
        const algo1 = algo1cc * 0.4 + algo1exam * 0.6;
        const fr = frcc * 0.2 + frtp * 0.3 + frexam * 0.5;
        const math1 = math1cc * 0.3 + math1tp * 0.2 + math1exam * 0.5;
        const prog1 = prog1cc * 0.6 + prog1exam * 0.4;
        const reseau = reseaucc * 0.4 + reseauexam * 0.6;

        score_final = (algo1 * 3 + app0 + fr * 4 + infographie * 2 + math1 * 8 + prog1 * 7 + reseau * 5) / 30;
        if(score_final>=15)
            {
                aff='Mention Tres Bien';
            }
            else if (score_final<=15&&score_final>=10)
            {
                aff='Encouragement et continuer à travailler';
            }
            else
            {
                aff='Tu dois travailler plus';
            }
       affichage_bonde = `
            <p>Your total score for Semester 1 is: ${score_final.toFixed(2)}</p>
     <p>Commentaire:${aff}</p>
        `;
    } else if (semester == 2) {
        const algo2cc = parseFloat(document.getElementById('algo2cc').value) || 0;
        const algo2exam = parseFloat(document.getElementById('algo2exam').value) || 0;
        const angcc = parseFloat(document.getElementById('angcc').value) || 0;
        const angexam = parseFloat(document.getElementById('angexam').value) || 0;
        const electrocc = parseFloat(document.getElementById('electrocc').value) || 0;
        const electroexam = parseFloat(document.getElementById('electroexam').value) || 0;
        const math2cc = parseFloat(document.getElementById('math2cc').value) || 0;
        const math2tp = parseFloat(document.getElementById('math2tp').value) || 0;
        const math2exam = parseFloat(document.getElementById('math2exam').value) || 0;
        const prog2cc = parseFloat(document.getElementById('prog2cc').value) || 0;
        const prog2tp = parseFloat(document.getElementById('prog2tp').value) || 0;
        const prog2exam = parseFloat(document.getElementById('prog2exam').value) || 0;
        const projet = parseFloat(document.getElementById('projet').value) || 0;

        if(![algo2cc,algo2exam,angcc,angexam,electrocc,electroexam,math2cc,math2exam,math2tp,prog2cc,prog2exam,prog2tp,projet].every(control_de_saisi))
            {
                alert('Error_controle de saisie:\n Il faut les nbres entiers entre 0 et 20');
                return;
            }
        const algo2 = algo2cc * 0.3 + algo2exam * 0.7;
        const ang = angcc * 0.4 + angexam * 0.6;
        const electro = electrocc * 0.4 + electroexam * 0.6;
        const math2 = math2cc * 0.2 + math2tp * 0.3 + math2exam * 0.5;
        const prog2 = prog2cc * 0.2 + prog2tp * 0.3 + prog2exam * 0.5;

        score_final = (algo2 * 2 + ang * 4 + electro * 3 + math2 * 8 + prog2 * 5 + projet * 8) / 30;
        if(score_final>=15)
        {
            aff='Mention Tres Bien';
        }
        else if (score_final<=15&&score_final>=10)
        {
            aff='Encouragement et continuer à travailler';
        }
        else
        {
            aff='Tu dois travailler plus';
        }

        affichage_bonde = `
            <p>Your total score for Semester 2 is: ${score_final.toFixed(2)}</p>
            <p>Commentaire:${aff}</p>
        `;
    }

    const resultElement = document.getElementById('affichage');
    resultElement.innerHTML = affichage_bonde;
}
