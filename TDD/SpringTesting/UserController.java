@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(
            @PathVariable Long id){

        return ResponseEntity.ok(
                userService.getUserById(id)
        );

    }
}