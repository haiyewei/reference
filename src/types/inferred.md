r[type.inferred]
# 推断类型

r[type.inferred.syntax]
```grammar,types
InferredType -> `_`
```

r[type.inferred.intro]
推断类型要求编译器在可能时基于周围可用的信息推断类型。

> [!EXAMPLE]
> 推断类型常用于泛型实参：
>
> ```rust
> let x: Vec<_> = (0..10).collect();
> ```

r[type.inferred.constraint]
推断类型不能用于项签名。

<!--
  What else should be said here?
  The only documentation I am aware of is https://rustc-dev-guide.rust-lang.org/type-inference.html
  There should be a broader discussion of type inference somewhere.
-->
