import './FruitFormulier.css';
import FruitItem from '../components/FruitItem';
import WideButton from "../components/WideButton";


function FruitFormulier({fruits, setFruits}) {

    return (
        <>
            <form id="fruitformulier" key="fruitformulier"
                  onReset={() => {
                      fruits.map((fruit, id) => {
                          fruit.count = 0;
                          console.log('Reset ' + id + ' set to ' + fruit.count);
                          return 0;
                      });
                      const glowers = document.getElementsByClassName("itemglow");

                      for (let i = 0; glowers.length; ++i) {
                          glowers[0].classList.remove("itemglow");
                      }

                      setFruits(fruits);
                  }}

                  onSubmit={(e) => {
                      setFruits(fruits);
                      e.preventDefault();
                  }}

            >
                <fieldset>
                    <legend>Stel uw fruitmand samen</legend>
                    {fruits.map((fruit, id) => <FruitItem
                        key={fruit.name}
                        fruits={[...fruits]}
                        idx={id}
                        setFruits={setFruits}>
                        {fruit.name}
                    </FruitItem>)}
                    <WideButton fruits={fruits}>
                        Reset
                    </WideButton>

                </fieldset>


            </form>
        </>
    );


}

export default FruitFormulier