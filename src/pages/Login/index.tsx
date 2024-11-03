import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { authIp } from "@/utils/ip";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  username: z.string().min(2, "Username or email is required"),
  password: z.string().min(3, "Password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const res = await axios.post(`${authIp}/login`, values);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.data));
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      toast.error("Login failed. Please check your information");
      form.setError("root", {
        type: "manual",
        message: "Login failed. Please check your information",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full p-4">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl md:text-3xl">Login</CardTitle>
        </CardHeader>
        <CardContent className="px-4 md:px-6">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 flex flex-col"
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="text-sm md:text-base">
                      Username or Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter username or email"
                        {...field}
                        className="h-10 md:h-11"
                      />
                    </FormControl>
                    <FormDescription className="text-xs md:text-sm">
                      Enter your username or email address
                    </FormDescription>
                    <FormMessage className="text-xs md:text-sm" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="text-sm md:text-base">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter password"
                        {...field}
                        className="h-10 md:h-11"
                      />
                    </FormControl>
                    <FormMessage className="text-xs md:text-sm" />
                  </FormItem>
                )}
              />

              {form.formState.errors.root && (
                <p className="text-red-500 text-xs md:text-sm">
                  {form.formState.errors.root.message}
                </p>
              )}

              <Button type="submit" className="w-full h-10 md:h-11 mt-4">
                Login
              </Button>
            </form>
          </Form>

          <div className="flex items-center  gap-2 mt-6 text-sm md:text-base">
            <span>Don't have an account?</span>
            <Button
              onClick={() => navigate("/auth/register")}
              variant="link"
              className="p-0 h-auto"
            >
              Register
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
