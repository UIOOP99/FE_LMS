import React from "react";
import MessageCard from "./components/MessageCard";
import Navbar from "./components/Navbar";

const index = () => {
  const attachedFiles = [
    { fileName: 'file_1.pdf', fileUrl: 'url'},
    { fileName: 'file_2.pdf', fileUrl: 'url'},
    { fileName: 'file_3.pdf', fileUrl: 'url'},
  ];
  const userAnswers = [
    { userFullName: 'امیررضا اسماعیلی', answer: 'جواب سوال اول'},
  ];
  const message = 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.';

  return (
    <div>
      <Navbar />
      <MessageCard 
        userFullName="امیررضا اسماعیلی" 
        classRoomName="مهندسی نت 2" 
        message={message} 
        attachedFiles={attachedFiles} 
        messageDate={new Date()}
        userAnswers={userAnswers}
      />
    </div>
  );
};

export default index;
