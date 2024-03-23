"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { askGemini } from "@/services/gemini";
import { useMutation } from "react-query";
import { Progress } from "./ui/progress";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Comparison = () => {
  const [data, setData] = useState({
    first: "",
    second: "",
  });

  const [progress, setProgress] = useState(0);

  const {
    data: result,
    isError,
    isLoading,
    mutate,
  } = useMutation({
    mutationKey: ["ASK_GEMINI"],
    mutationFn: askGemini,
  });

  useEffect(() => {
    setProgress(0);
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 80) return prev + 10;
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isLoading]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (data.first.length < 1) return;
    if (data.second.length < 1) return;

    const { first, second } = data;

    mutate({ first, second });
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h3 className="md:text-base text-sm font-semibold">
        <span className="text-slate-600 dark:text-slate-400">
          Mulai Mendang Mendingnya
        </span>{" "}
        🤔
      </h3>
      <form
        className="text-md md:text-xl mt-4 font-semibold flex flex-col md:flex-row gap-4"
        onSubmit={handleSubmit}
      >
        <label htmlFor="first">Jadi Mending</label>
        <input
          id="first"
          name="first"
          className="border-b dark:bg-slate-800 bg-slate-200 rounded-lg border-slate-500 dark:border-sky-500 px-2 py-0.5 w-full md:max-w-40"
          type="text"
          value={data.first}
          onChange={handleChange}
          required
        />
        <label htmlFor="second">atau mending</label>
        <input
          id="second"
          name="second"
          className="border-b dark:bg-slate-800 bg-slate-200 rounded-lg border-slate-500 dark:border-sky-500 px-2 py-0.5 w-full md:max-w-40"
          type="text"
          value={data.second}
          onChange={handleChange}
          required
        />
        <p>?</p>
        <Button disabled={isLoading} type="submit">
          Tanya Gemini
        </Button>
      </form>
      {isLoading && (
        <div className="md:px-10 py-10 flex flex-col gap-5">
          <p className="text-sm text-center">
            Menunggu respon{" "}
            <span className="font-semibold underline">GOOGLE Gemini Ai</span>...
          </p>
          <Progress value={progress} />
        </div>
      )}
      {result && (
        <Card className="p-5 mt-10">
          <div className="flex items-center gap-4">
            <Avatar className="border">
              <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV1QWx0soc08N7wU8LjH95wZTkF_q13tg1KH4AOTs3xw&s" />
              <AvatarFallback>GM</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">GOOGLE Gemini AI ⭐</p>
              <p className="text-xs text-slate-500 dark:text-slate-300">
                Membalas, baru saja
              </p>
            </div>
          </div>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            {result.split("\n").map((text, i) => {
              if (text.trim() === "*") return <br />;
              if (text.includes("* ") && text.includes(" *")) {
                return <p key={i}>{text.replace(/\*/g, "")}</p>;
              }
              if (text.includes("**")) {
                return <strong key={i}>{text.replace(/\*/g, "")}</strong>;
              }

              return (
                <p key={i} className="mt-4">
                  {text}
                </p>
              );
            })}
          </p>
        </Card>
      )}
      {isError && <div>Ups terjadi error!</div>}
    </div>
  );
};

export default Comparison;
