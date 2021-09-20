import "./BestelFormulier.css"
import TextInput from "../components/TextInput";
import WideButton from "../components/WideButton";
import AgeInput from "../components/AgeInput";
import PostCodeInput from "../components/PostCodeInput";
import FrequencyInput from "../components/FrequencyInput";
import TimeofdayInput from "../components/TimeofdayInput";
import RemarkInput from "../components/RemarkInput";
import AgreeInput from "../components/AgreeInput";

function BestelFormulier({fruits, naw, setNaw}) {

    function validateSubmit(orderCount) {
        if (orderCount === 0) return false;

        for (const [key, value] of Object.entries(naw)) {
            //console.log(`${key}: ${value}`);
            switch (key) {
                case 'firstname':
                case 'lastname':
                case 'postcode':
                    if (value === "") {
                        console.log(`${key} is empty`);
                        return false;
                    }
                    break;
                case 'age':
                    if (Number(value) < 18 || Number(value) > 150) {
                        console.log(`${key} has value ${value}, which is out of bounds`);
                        return false;
                    }
                    break;
                case 'agreed':
                    if (!value) {
                        console.log(`${key} has value ${value}, it must be true`);
                        return false;
                    }
                    break;
                case 'frequency':
                case 'timeofday':
                case 'remarks':
                    // fields have fixed value or can be empty
                    break;
                default:
                    console.log(`Unknown key ${key} with  value ${value} found in validateSubmit`);
                    break;
            }
        }
        return true;
    }

    return (
        <form id="bestelformulier" key="bestelformulier"
              onSubmit={(e) => {
                  console.log('------------- Besteld fruit -----------------');
                  let bestelling = [];
                  fruits.map((fruit) => {
                      if (fruit.count) bestelling.push(fruit);
                      return 0;
                  });
                  bestelling.forEach(f => {
                      console.log(f.name + ': ' + f.count + ' stuks')
                  });
                  console.log('----------- Verzendgegevens ------------------');

                  for (const [key, value] of Object.entries(naw)) {
                      console.log(`${key}: ${value}`);
                  }
                  console.log('----------------------------------------------');

                  if (!validateSubmit(bestelling.length)) {
                      console.log("Formulier is niet volledig ingevuld");
                  } else {
                      console.log("Formulier ok, kan worden verzonden");
                  }

                  e.preventDefault();
              }
              }>
            <fieldset>
                <legend className="bestel-fieldset">Uw gegevens</legend>
                <TextInput name="firstname" naw={{...naw}} setNaw={setNaw}>
                    Voornaam
                </TextInput>
                <TextInput name="lastname" naw={{...naw}} setNaw={setNaw}>
                    Achternaam
                </TextInput>

                <AgeInput name="age" naw={{...naw}} setNaw={setNaw}>
                    Leeftijd
                </AgeInput>

                <PostCodeInput name="postcode" naw={{...naw}} setNaw={setNaw}>
                    Postcode
                </PostCodeInput> {/*should ideally be postcode field*/}

                <FrequencyInput name="frequency" naw={{...naw}} setNaw={setNaw}>
                    Bezorgfrequentie
                </FrequencyInput>{/*should be option list*/}

                <TimeofdayInput name="timeofday" naw={{...naw}} setNaw={setNaw}>
                    Bezorgtijd
                </TimeofdayInput>{/*should be radio buttons*/}

                <RemarkInput name="remarks" naw={{...naw}} setNaw={setNaw}>
                    Opmerkingen
                </RemarkInput>{/*should be textarea*/}

                <AgreeInput name="agreed" naw={{...naw}} setNaw={setNaw}>
                    Akkoord met de voorwaarden
                </AgreeInput>{/*should be checkbox*/}

            </fieldset>
            <WideButton>Verzend</WideButton>
        </form>
    );


}

export default BestelFormulier