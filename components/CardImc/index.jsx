import InputComponet from "../InputComponet";
import { GiBodyHeight } from "react-icons/gi";
import { FaWeightHanging } from "react-icons/fa6";
import { useState } from "react"
import { toast } from "react-toastify";


export default function CardImc (){

    const [altura , setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [resultado, setResultado] = useState(0);
    const [faixa, setFaixa] = useState("")

    function calcularImc(e){
       
        if(!altura || !peso){
            toast.error("Preencher todos os campos");
            return;
        }

        const calculo = (peso/(altura * altura))* 10000;
        setResultado(calculo.toFixed(2))

        ///Boa pratica trocar o else por return
        if(calculo < 18.5){
           return setFaixa("está abaixo do peso")
        }
        if(calculo >= 18.5 && calculo <= 24.5){
            return setFaixa ("está peso ideal")
        }
        if(calculo >= 25 && calculo <=29.9){
            return setFaixa ("possui obesidade ripo 1")
        }
        if(calculo >= 30 && calculo <= 34.9){
            return setFaixa ("possui obeside tipo 2")
        }
        if(calculo >= 30 ){
            return setFaixa ("procure um nutricionista")
        
        }

    }

    return(
       
        <div className="w-[60%] min-h-[300px] p-4 bg-[#ffffff21] rounded-xl flex flex-col">
            <div className="w-full">
                <p className="font-bold text-[25px] text-white flex ">Calculadora IMC</p>
                <div className="w-[250px] h-[5px] bg-[#57DAAC]"></div>

                <div className="w-full flex flex-col gap-2 mt-4">
                    <InputComponet
                    label={"Altura"}
                    icone={<GiBodyHeight />}
                    valorFinal={"cm"}
                    handle={(event)=>setAltura(event.target.value)}
                    />
                
                <InputComponet
                 label={"peso"}
                 icone={<FaWeightHanging />}
                 valorFinal={"kg"}
                 handle={(event)=>setPeso(event.target.value)}
                
                />
                </div>
                <div className=" flex items-center justify-center w-full">
                <button 
                onClick={calcularImc}
                className="w-[90%] h-[40px] rounded-md bg-[#57DAAC] mt-2 font-bold" >Calcular</button>
            </div>   
            </div>
            {resultado > 0 && (
                <div className="w-full flex flex-col mt-4">
                    <div className="w-full h-[1px] bg-gray-400"></div>
                    <div className="flex w-full MEIO p-[10px]">
                        <div className="w-[40%] flex flex-col items-center ESQUERDO">
                            <p className="text-[38px] text-[#57DAAC]">{resultado}</p>
                            <p className="text-white">Seu Imc</p>
                        </div>
                        <div className="w-[60%] h-20 flex DIREITO items-center">
                            <p className="text-white"> Você {faixa}</p>
                        </div>
                    </div>
                <div className="w-full h-[1px] bg-gray-400"></div>
                </div>
            )}

        </div>
        
    )
}