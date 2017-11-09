# Testing in ASP.NET Core
- Use __Moq__ data objects
    - Set up instances:
    ```csharp
    bob = new Mock<Type>();
    bob.Setup(bob => bob.name == "bob");
    ```
    - Helpful for mocking up error messages (e.g. invalid form)

### Directory structure
```
/root  
    /proj  
    /test  
```

### AAA Testing
1. Arrange
2. Act
3. Assertions

### Testing an ASP.NET core web project

1. __MODELS:__  
    - Use context  
    - Namespaces  
    - Databases  

2. __VIEWS:__  
    - Selenium  
    - ViewModel info in our IActionResult  
    - Razor Generator extension to directly test view pages  

3. __CONTROLLER:__  
    - Instantiating a controller  
    - Maybe set up POST request or invalid submission  
    - Awareness of object returned to you  