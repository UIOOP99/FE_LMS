import { Card } from '@material-ui/core';
import React from 'react';
import FilterSelection from 'Scenes/components/FilterSelection';
import MessageList from 'Scenes/components/MessageList';
import Spacer from 'Scenes/components/Spacer';
import { IMessageCardProps } from 'Scenes/MainPage/components/MessageCard';

const Filler = ({ text, height }: {text:string, height: string}) => (
  <Card 
    style={{
      backgroundColor: 'gainsboro',
      height,
    }}
    elevation={0}
  >
    {text}
  </Card>
);

const messageCardMocks: IMessageCardProps[] = [
  {
    userFullName: "امیررضا اسماعیلی",
    classRoomName: "مهندسی نت 2",
    message: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
    attachedFiles: [
      { fileName: 'file_1.pdf', fileUrl: 'url'},
      { fileName: 'file_2.pdf', fileUrl: 'url'},
      { fileName: 'file_3.pdf', fileUrl: 'url'},
    ],
    userAnswers: [
      { userFullName: 'امیررضا اسماعیلی', answer: 'جواب سوال اول'},
    ],
    messageDate: new Date(),
  },
  {
    userFullName: "امیررضا اسماعیلی",
    classRoomName: "مهندسی نت 2",
    message: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
    attachedFiles: [
      { fileName: 'file_1.pdf', fileUrl: 'url'},
      { fileName: 'file_2.pdf', fileUrl: 'url'},
      { fileName: 'file_3.pdf', fileUrl: 'url'},
    ],
    userAnswers: [
      { userFullName: 'امیررضا اسماعیلی', answer: 'جواب سوال اول'},
    ],
    messageDate: new Date(new Date().setHours(1)),
  },
];

const LessonCenterSection = () => {
  return (
    <>
      <Filler height="100px" text="insert create post component here"/>
      <Spacer spacing={2} orientation="h"/>
      <FilterSelection />
      <Spacer spacing={2} orientation="h"/>
      <MessageList messages={messageCardMocks}/>
     </>
  );
};

export default LessonCenterSection;