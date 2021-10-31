package br.com.bonestore.bone.repositorio;

import br.com.bonestore.bone.model.Bone;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositorioBone extends JpaRepository<Bone, Long> {

}
