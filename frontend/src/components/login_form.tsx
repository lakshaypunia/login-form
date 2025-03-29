import React, { useEffect } from "react";
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from 'react-query';
import { z } from "zod"
import axios from 'axios';
import Input from "./ui/input";
import Notification from "./notification";

const loginSchema = z.object({
  uid: z.string().min(1, "User ID is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

type LoginFormValues = z.infer<typeof loginSchema>

const LoginForm : React.FC = () => {

  const {register,handleSubmit,formState: { errors },reset} = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
        uid: "",
        password: "",
        },
    })


    const [notification, setNotification] = useState<{ message: string, success:boolean, visible: boolean }>({
      message : '',
      success : true ,
      visible: false,
    });


    const submitLogin = async (loginData: LoginFormValues) => {
      try {
        console.log("request is sent")
        const response = await axios.post('http://localhost:3001/api/auth/register', loginData);
        return response.data; 
      } catch (error) {
        throw new Error("Login failed, please try again.");
      }
    };


    const { mutate, isLoading } = useMutation(submitLogin, {
      onSuccess: (data) => {
        setNotification({ message: data.message, success: data.success, visible: true });
        localStorage.setItem("userToken", data.token || ""); 
        reset();
      },
      onError: () => {
        setNotification({ message: "Login failed! Backend might not be running.", success: false, visible: true });
      },
    });
  
    // Close notification after 3 seconds
    useEffect(() => {
      if (notification.visible) {
        const timer = setTimeout(() => {
          setNotification((prev) => ({ ...prev, visible: false }));
        }, 3000);
        return () => clearTimeout(timer);
      }
    }, [notification.visible]);

  

  // Handle form submit
  const onSubmit = (data: LoginFormValues) => {
    mutate(data); // trigger the mutation (send data to backend)
  };



  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
    <div className="w-[320px] h-[314px] flex flex-col items-center justify-start gap-12">
      <h1 className="font-jakarta font-bold text-[30px] leading-[38px] w-[230px] h-[38px] text-[#232323]">Welcome back!</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">


       <div className="flex flex-col gap-6">
        <Input register={register} errors={errors} placeholder="UID" type="uid" name="uid" className="" />
        <Input register={register} errors={errors} placeholder="Password" type="password" name="password" className="" />
        </div>

        <button className="w-[320px] border-[1px] rounded-[8px] bg-[#2B3A67] hover:bg-[#1e2340] py-[16px] px-[24px] text-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>

    <Notification
        message={notification.message}
        success={notification.success}
        visible={notification.visible}
      />
    </div>
  )
}


export default LoginForm
