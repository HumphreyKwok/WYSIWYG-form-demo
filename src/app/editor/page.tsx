const Editor = () => {
  return (
    <div className="container flex h-[85%] items-center justify-center gap-4">
      <section className="flex h-[90%] flex-1 flex-col items-center justify-center">
        Preview
      </section>
      <div className="h-full border-l-[1px] border-foreground"></div>
      <section className="flex h-[90%] w-1/4 flex-col items-center justify-center">
        Editor
      </section>
    </div>
  );
};

export default Editor;
