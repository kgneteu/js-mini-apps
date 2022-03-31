import {useState} from "react";

const BMICalculator = () => {
    let [bmi, setBmi] = useState(-1)
    let [error, setError] = useState("")
    let [info, setInfo] = useState('')
    let [weight, setWeight] = useState(1)
    let [height, setHeight] = useState(1)
    let [infoColor, setInfoColor] = useState('');


    const calculateBMI = () => {
        setError("");
        if (isNaN(height)) {
            setError("Provide a valid Height!");
        } else if (isNaN(weight)) {
            setError("Provide a valid Weight!");
        } else {
            const newHeight = +height / 100;
            let bmi = +(weight / Math.pow(newHeight, 2)).toFixed(2);

            if (bmi < 18.5) {
                setInfoColor("bg-amber-500")
                setInfo('Underweight')
            } else if (bmi >= 18.5 && bmi < 25.0) {
                setInfoColor("bg-green-500")
                setInfo('Normal')
                //showResult(`Normal: <span>${bmi}</span>`, "green");
            } else if (bmi >= 25.0 && bmi < 29.9) {
                setInfoColor("bg-blue-500")
                setInfo('Overweight')
            } else {
                setInfoColor("bg-red-500")
                setInfo('Obese')
            }
            setBmi(bmi)
        }
    };

    return (
        <div className="mx-auto">
            <div className="flex flex-col bg-sky-700 w-max p-8 items-center">
                <div><h1 className="text-white border-b-4">BMI Calculator</h1></div>
                <div className="mt-4">
                    <label htmlFor="personHeight" className="block text-white">Height[cm]</label>
                    <input type="number" min="0" max="250" id="personHeight" name="personHeight"
                           className="rounded-md p-1" value={height} onInput={e => setHeight(+e.currentTarget.value)}/>
                </div>
                <div className="mt-4">
                    <label htmlFor="personWeight" className="block text-white">Weight[kg]</label>
                    <input type="number" min="0" max="250" id="personWeight" name="personWeight"
                           className="rounded-md p-1" value={weight} onInput={e => setWeight(+e.currentTarget.value)}/>
                </div>
                {error !== '' && <div className="p-2 text-white bg-red-900 my-4">{error}</div>}
                <button className="mt-4 bg-amber-600 text-white text-xl w-44 rounded-xl h-12"
                        onClick={calculateBMI}>Calculate
                </button>
                {bmi >= 0 && <div className="my-4">
                    <div className={[infoColor,'p-4'].join(" ")}>{info}: {bmi}</div>
                </div>}
            </div>
        </div>
    );
};

export default BMICalculator;
