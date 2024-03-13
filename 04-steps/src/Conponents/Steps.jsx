import {useState} from 'react';

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

export default function Steps() {
    const [step, setStep] = useState(1);

    const stepHandler = (action) => {
        if (action === "previous" && step > 1) {
            setStep(step - 1);
        } else if (step < 3 && action === "next") {
            setStep(step + 1);
        }
    };

    return (
        <div className="steps">
            <div className="numbers">
                <div className={`${step >= 1 ? "active" : "passive"}`}>1</div>
                <div className={`${step >= 2 ? "active" : "passive"}`}>2</div>
                <div className={`${step >= 3 ? "active" : "passive"}`}>3</div>
            </div>

            <p className="message">
                step {step}: {messages[step - 1]}
            </p>

            <div className="buttons">
                <button
                    className={step === 1 ? "not-displyed" : ""}
                    onClick={() => stepHandler("previous")}
                    style={{
                        backgroundColor: "#7950f2",
                        color: "#fff",
                    }}
                >
                    Previous
                </button>
                <button
                    className={step === 3 ? "not-displyed" : ""}
                    onClick={() => stepHandler("next")}
                    style={{
                        backgroundColor: "#7950f2",
                        color: "#fff",
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    );
}