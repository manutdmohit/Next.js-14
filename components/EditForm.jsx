'use client';

import { useFormStatus } from 'react-dom';

import { editTask } from '@/utils/actions';

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="btn btn-primary btn-block btn-sm uppercase"
      disabled={pending}
    >
      {pending ? 'pending...' : 'edit'}
    </button>
  );
};

const EditForm = ({ task }) => {
  const { id, content, completed } = task;

  return (
    <form
      action={editTask}
      className="max-w-sm p-12 border border-base-300 rounded-lg"
    >
      <input type="hidden" name="id" value={id} />

      {/* {content} */}
      <input
        type="text"
        name="content"
        required
        defaultValue={content}
        className="input input-bordered w-full focus:outline-none"
      />

      {/* completed */}
      <div className="form-control my-4">
        <label htmlFor="completed" className="label cursor-pointer">
          <span className="label-text">completed</span>
          <input
            type="checkbox"
            defaultChecked={completed}
            id="completed"
            name="completed"
            className="checkbox checkbox-primary checkbox-sm"
          />
        </label>
      </div>
      <SubmitBtn />
    </form>
  );
};

export default EditForm;
