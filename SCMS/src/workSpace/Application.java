package workSpace;
public class Application {
    private int id;
    private String name;
    private String email;
    private String course;
    private ApplicationStatus status;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getCourse() {
		return course;
	}
	public void setCourse(String course) {
		this.course = course;
	}
	public ApplicationStatus getStatus() {
		return status;
	}
	public void setStatus(ApplicationStatus status) {
		this.status = status;
	}
	
	 @Override
	    public String toString() {
	        return "Application{" +
	                "id=" + id +
	                ", name='" + name + '\'' +
	                ", email='" + email + '\'' +
	                ", course='" + course + '\'' +
	                ", status=" + status +
	                '}';
	    }

    // Constructors, getters, setters, and toString methods.
}