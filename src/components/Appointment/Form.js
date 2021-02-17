import React from "react";
import Button from "components/Button";
import InterviewerList from "components/InterviewerList";
import "components/Appointment/styles.scss";

export default function Form(props) {
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={props.name}
            /*
              This must be a controlled component
            */
          />
        </form>
        <InterviewerList
          interviewers={props.interviewers}
          value={props.interviewer}
          onChange={props.setInterviewer}
          selected = {props.interviewer === props.interviewers.id}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={props.onCancel}>Cancel</Button>
          <Button confirm onClick={props.onSave}>Save</Button>
        </section>
      </section>
    </main>
  );
}