@Service
public class UserService {

    @Autowired
    UserRepository repository;

    public User getUserById(Long id){
        return repository.findById(id)
                .orElse(null);
    }

}