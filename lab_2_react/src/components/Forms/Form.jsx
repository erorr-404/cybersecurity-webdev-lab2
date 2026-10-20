import { FormItem } from "./FormItem";
import { Input } from "./Input";

export function Form() {
  return (
    <form action="https://formspree.io/f/xbgdvdyn" method="post">
      <FormItem>
        <label htmlFor="form-name">Ім'я</label>
        <Input
          type="text"
          id="form-name"
          name="form-name"
          placeholder="Іван Іваненко"
          required
        />
      </FormItem>
      <FormItem>
        <label htmlFor="form-email">Email:</label>
        <Input
          type="email"
          name="form-email"
          id="form-email"
          placeholder="example@gmail.com"
          required
        />
      </FormItem>
      <FormItem>
        <label htmlFor="form-number">Номер телефону:</label>
        <Input
          type="tel"
          name="form-number"
          id="form-number"
          placeholder="+38 000 000 0000"
          required
        />
      </FormItem>
      <FormItem>
        <label htmlFor="form-text">Коментар</label>
        <textarea
          name="form-text"
          id="form-text"
          rows="4"
          className="border border-control-border bg-control focus:border-accent outline-0 rounded px-2 py-1 max-h-30"
        ></textarea>
      </FormItem>
      <FormItem>
        <input
          type="submit"
          value="Надіслати"
          className="max-w-full break-all rounded-md border border-control-border bg-control px-3 py-2 text-sm text-control-text transition-colors hover:border-accent hover:bg-control-hover hover:text-white self-center"
        />
      </FormItem>
    </form>
  );
}
